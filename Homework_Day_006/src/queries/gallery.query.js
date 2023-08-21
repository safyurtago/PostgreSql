const Joi = require('joi');

const {fetch, fetchOne} = require('../utils/pg')

const createQuery = "insert into gallery (photo) values ($1) returning*"
const findQuery = "select * from gallery"
const findOne = "select * from gallery where id = $1"
const updateQuery = "update gallery set photo = $1 where id = $2"
const deleteQuery = "delete from gallery where id = $1"

module.exports = {
    create: async (photo) => await fetchOne(createQuery, photo),
    find: async () => await fetch(findQuery),
    findOne: async (id) => await fetchOne(findOne, id),
    update: async (photo, id) => await fetchOne(updateQuery, photo, id),
    delete: async (id) => await fetchOne(deleteQuery, id)
}