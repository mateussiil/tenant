const connection = require('../database/connection');    

module.exports = {
    async index(request, response){
        const { city, price, qtdQuartos, qtdPeoples, id_prop } = request.query;
        const { page = 1 } = request.query;
        
        let houses;
        //Por padrao na rota ja vem o nome do estado e cidade
        
        if(id_prop){
            houses = await connection('house').where({id_prop}).select('*')
            return response.json(houses);
        }

        (city) ? houses = await connection('house')
                    .where({city})
                    .select('*')
                : houses = await connection('house')
                    .select('*')

        // serao filtrados esses casos
        // isso foi feito pensando caso um deles estivem vazios
        
        const houses_filter = houses.filter(house=>{
            if(price){
                if(qtdQuartos){
                    if(qtdPeoples){
                        return house.price<=price||house.qtdQuartos==qtdQuartos||house.qtdPeoples==qtdPeoples
                    }else{
                        return house.price<=price||house.qtdQuartos==qtdQuartos
                    }
                }else{
                    if(qtdPeoples){
                        return house.price<=price||house.qtdPeoples==qtdPeoples
                    }else{
                        return house.price<=price
                    }
                }
            }else{
                if(qtdQuartos){
                    if(qtdPeoples){
                        return house.qtdQuartos==qtdQuartos||house.qtdPeoples==qtdPeoples
                    }else{
                        return house.qtdQuartos==qtdQuartos
                    }
                }else{
                    if(qtdPeoples){
                        return house.qtdPeoples==qtdPeoples
                    }else{
                        return house
                    }
                }
            }
        })

        return response.json(houses_filter);
    },

    async show(request, response){
        const { id_house } = request.query;

        return await connection('house')
                    .where({ id_house })
                    .select('*')
                    .first()
    },

    async store(request, response){
        const { cep, street, city, uf, number, price, qtdQuartos, qtdPeoples, description } = request.body;
    
        const id_prop = request.headers.authorization

        const data = {
            id_prop,
            cep,
            street,
            city,
            uf, 
            number,
            price,
            qtdQuartos,
            qtdPeoples,
            description
        }
    
        try{
            const user = await connection('users')
                .where('cpf', id_prop)
                .first()

            if(!user.proprietary){
                return response.status(401).json({ error: 'Operation not permitted'});
            }

            //retorna o id 
            const [ id_house ] = await connection('house').insert(data)

            return response.status(201).json({id_house});

        }catch(err){
            return response.status(401).json({ error: 'Operation not permitted'});
        }  

    },

    async destroy(request, response){
        const {id} = request.params; //id da casa

        const id_prop = request.headers.authorization;

        //busca pra saber quem e o id prop
        const house = await connection('house') 
            .where('id',id)
            .select('id_prop')
            .first();
        
        if(id_prop != house.id_prop){
            return response.status(401).json({ error: 'Operation not permitted'});
        }

        await connection('house')
            .where('id',id)
            .delete();

        return response.status(201).send();
    },

    async update(request, response){
        const {id} = request.params;

        const id_tenant = request.headers.authorization;

        const house = await connection('house')
            .where('id',id)
            .select('*')
            .first();

        if(house.id_prop==id_tenant){
            return response.status(401).json('Não é possivel fazer essa operação');
        }

        await connection('house')
            .where('id',id)
            .update('qtdPeoples', house.qtdPeoples-1 );

        return response.status(201).send();
    }
}