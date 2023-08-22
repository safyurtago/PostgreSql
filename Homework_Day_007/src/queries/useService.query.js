const {fetch, fetchOne} = require('../utils/pg')

const beginQuery = "begin transaction"
const rollbackQuery = "rollback"
const commitQuery = "commit"
const createQuery = "insert into usedServices (service_id, customer_id) values ($1, $2) returning*"
const getAllQuery = "select * from usedServices"
const getOneQuery = "select * from usedServices where id = $1"

module.exports = {
    create: async (service_id, customer_id) => await fetchOne(createQuery, service_id, customer_id),
    begin: async () => await fetchOne(beginQuery),
    rollback: async () => await fetchOne(rollbackQuery),
    commit: async () => await fetchOne(commitQuery),
    getAll: async () => await fetch(getAllQuery),
    getOne: async (id) => await fetchOne(getOneQuery, id)
}