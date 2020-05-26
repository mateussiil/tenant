const connection = require('../database/connection');    

module.exports = {
    async index(request, response){
        const { cpf } = request.query;

        let users;

        (cpf) ? users = await connection('users')
                .where({cpf})
                .select('*')
                .first()
            : users = await connection('users')
                .select('*')

        return response.json(users);
    },

    async store(request, response){

        try{
            await connection('users').insert(request.body)
        }catch(err){
            return response.status(400).json('Usuario ja cadastrado');
        }   
        
        return response.status(201).send();
    },
}