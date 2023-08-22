const {fetch, fetchOne} = require('../utils/pg')

const registerQuery = "insert into users (name, username, balance, password) values($1, $2, $3, $4) returning *"
const loginQuery = "select id from users where username = $1 and password = $2"
const findId = "select * from users where id = $1"
const decreaseQuery = "update users set balance = balance - $1 where id = $2"
const increaseQuery = "update users set balance = balance + $1 where id = $2"

module.exports ={
    register: async (name, username, balance, password) => await fetchOne( registerQuery, name, username, balance, password),
    login: async (username, password) => await fetchOne( loginQuery, username, password),
    findId: async (id) => await fetchOne( findId, id),
    decrease: async ( price, id) => await fetchOne( decreaseQuery, price, id),
    increase: async (price, id) => await fetchOne( increaseQuery, price, id),
}