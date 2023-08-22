require('dotenv/config')

const {env} = process

const config = {
    port: env.PORT,
    db_url: env.DB_URL,
    jwt_secret_key: env.JWT_SECRET_KEY
}

module.exports = config