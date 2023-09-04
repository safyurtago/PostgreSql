require('dotenv/config');

const {env} = process;

const config = {
    port: env.PORT,
    jwt_secret_key: env.JWT_SECRET_KEY,
    mongo_url: env.MONGO_URL
};

module.exports = config;