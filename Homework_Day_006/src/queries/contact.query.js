const Joi = require('joi');

const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into contacts (name, phonenumber, email, message) values ($1, $2, $3, $4) returning*"
const findQuery = "select * from contacts"
const findOne = "select * from contacts where id = $1"
const updateQuery = "update contacts set name = $1, phonenumber = $2, email = $3, message = $4 where id = $4"
const deleteQuery = "delete from contacts where id = $1"

module.exports = {
    create: async (name, phonenumber, email, message) => await fetchOne(createQuery, name, phonenumber, email, message),
    find: async () => await fetch(findQuery),
    findOne: async (id) => await fetchOne(findOne, id),
    update: async (name, phonenumber, email, message, id) => await fetchOne(updateQuery, name, phonenumber, email, message, id),
    delete: async (id) => await fetchOne(deleteQuery, id)
}