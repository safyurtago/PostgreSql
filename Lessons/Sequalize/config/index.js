require('dotenv/config')


const {env} = process

const config = {
    port: env.PORT,
    db_host: env.DB_HOST,
    db_name: env.DB_NAME,
    db_user: env.DB_USER,
    db_pass: env.DB_PASS,
    db_port: env.DB_PORT,
}

module.exports = config;