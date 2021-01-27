// scheme-model
const db = require("../../data/db-config")

module.exports = {
    find()
    { 
        return db("schemes");

    }, 
    findById(id)
    {
        return db("schemes")
            .where("id", id)
            .first(); 
    },

    add(scheme)
    {
        return db("schemes")
        .insert(scheme)
            .then(([scheme_id]) => 
            {
                return db("schemes")
                    .where("id", scheme_id)
                    .first();
        })
    }
}