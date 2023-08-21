const Joi = require('joi');

const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into subscribers (email) values ($1) returning*"
const findQuery = "select * from subscribers"
const findOne = "select * from subscribers where id = $1"
const updateQuery = "update subscribers set email = $1 where id = $2"
const deleteQuery = "delete from subscribers where id = $1"

module.exports = {
    create: async (email) => await fetchOne(createQuery, email),
    find: async () => await fetch(findQuery),
    findOne: async (id) => await fetchOne(findOne, id),
    update: async (email, id) => await fetchOne(updateQuery, email, id),
    delete: async (id) => await fetchOne(deleteQuery, id)
}