const Joi = require('joi');

const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into blogs (title, description, photo) values ($1, $2, $3) returning*"
const findQuery = "select * from blogs order by created_at"
const findOne = "select * from blogs where id = $1"
const updateQuery = "update blogs set title = $1, description = $2, photo = $3 where id = $4"
const deleteQuery = "delete from blogs where id = $1"

module.exports = {
    create: async (title, description, photo) => await fetchOne(createQuery, title, description, photo),
    find: async () => await fetch(findQuery),
    findOne: async (id) => await fetchOne(findOne, id),
    update: async (title, description, photo, id) => await fetchOne(updateQuery, title, description, photo, id),
    delete: async (id) => await fetchOne(deleteQuery, id)
}