const connection = require('../database/connection');    

module.exports = {
    async index(request, response){
        const arquivos = await connection('arquives')
                    .select('*')

        return response.json(arquivos)
    },

    async show(request, response){
        const { idHouse } = request.query;

    },

    async store(request, response){
        const { originalname: name, size, key, location:url } = request.file;
        console.log(request.file)
        const id_prop = request.headers.authorization;
        const { id_house } = request.query;

        const idProp = Number(id_prop)
        const idHouse = Number(id_house)

        data = {
            name,
            size,
            key:idHouse+'-'+idProp,
            url,
            id_prop: idProp,
            id_house: idHouse
        }
        
        await connection('arquives').insert(data).where({id_prop:idProp})

        return response.json(data);
    },

    async destroy(request, response){
        const {id} = request.params; //id da casa

        const id_prop = request.headers.authorization;

        const arquive = connection('arquives')
            .where('id',id)
            .select('id_prop', id_prop)
            .first();

        if(id_prop != arquive.id_prop){
            return response.status(401).json({ error: 'Operation not permitted'});
        }

        await connection('arquives')
            .where('id',id)
            .delete();

        return response.status(201).send();
    },

    async update(request, response){
    }
}