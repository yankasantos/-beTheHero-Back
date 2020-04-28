const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
    async index(request, response){
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response){
        const {name, email, whatsapp, city, uf} = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })

        return response.json({ id });
        
    },

    // async delete(request, response){
    //     const id_autenticaded = request.params;
        

    //     const incidentToDelete = await connection('ongs')
    //     .where('id_autenticaded')
    //     .select('id')
    //     .first();

    //     if(incidentToDelete.id != id_autenticaded){
    //         return response.status(401).json({error:'operation not permitted.'});
    //     }

    //     await connection('incidentes').where('id', id).delete();

    //     return response.status(204).send();

    // }
};
