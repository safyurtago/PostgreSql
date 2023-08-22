const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into services (name, price, owner_id) values ($1, $2, $3) returning*"
const getAllQuery = "select * from services";
const getOneQuery = "select * from services where id = $1";
const updateQuery = "update services set name = $1 , price = $2 where id = $3";
const deleteQuery = "delete from services where id = $1";
const ownerIdQuery = "select owner_id from services where id = $1";


module.exports = {
    create: async (name, price, owner_id) => await fetchOne( createQuery, name, price, owner_id),
    getAll: async () => await fetch( getAllQuery),
    getOne: async (id) => await fetchOne( getOneQuery, id),
    update: async (name, price, id) => await fetchOne( updateQuery, name, price, id),
    delete: async (id) => await fetchOne(deleteQuery, id),
    ownerId: async (id) => await fetchOne(ownerIdQuery, id)
}