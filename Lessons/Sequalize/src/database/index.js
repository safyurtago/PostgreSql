const {Sequelize} = require('sequelize')
const config = require('../../config');


const sequelize = new Sequelize({
    dialect: "postgres",
    host: config.db_host || "localhost",
    port: config.db_port || 8080,
    username: config.db_user || "postgres",
    password: config.db_pass || "admin",
    database: config.db_name || "something"
})


module.exports = sequelize;