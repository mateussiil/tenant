const connection = require('../database/connection');

module.exports = {
    async store(request, response){
        const { cpf } = request.body;

        const user = await connection('users')
                .where('cpf', cpf)
                .select('name')
                .first()
        
        if(!user){
            return response.status(404).json({ error: 'No User found'})
        }

        return response.json(user);
    }
}