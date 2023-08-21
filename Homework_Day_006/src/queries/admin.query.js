const {fetch, fetchOne} = require('../utils/pg')

const registerQuery = "insert into admin (name, email, password) values($1, $2, $3) returning*";
const loginQuery = "select id from admin where name = $1 and password = $2";
const findId = "select * from admin where id = $1";

module.exports = {
    regiser: async (name, email, password) => await fetchOne( registerQuery, name, email, password),
    login: async (name, password) => await fetchOne( loginQuery, name, password),
    findId: async (id) => await fetchOne( findId, id)
};