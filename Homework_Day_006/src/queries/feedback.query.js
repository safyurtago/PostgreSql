const Joi = require('joi');

const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into feedbacks (name, description, photo) values ($1, $2, $3) returning*"
const findQuery = "select * from feedbacks"
const findOne = "select * from feedbacks where id = $1"
const updateQuery = "update feedbacks set name = $1, description = $2, photo = $3 where id = $4"
const deleteQuery = "delete from feedbacks where id = $1"

module.exports = {
    create: async (name, description, photo) => await fetchOne(createQuery, name, description, photo),
    find: async () => await fetch(findQuery),
    findOne: async (id) => await fetchOne(findOne, id),
    update: async (name, description, photo, id) => await fetchOne(updateQuery, name, description, photo, id),
    delete: async (id) => await fetchOne(deleteQuery, id)
}