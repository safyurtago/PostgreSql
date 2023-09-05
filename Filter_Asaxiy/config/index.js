require('dotenv/config');

const {env} = process;

const config = {
    port: env.PORT,
    dbURI: env.DB_URI,
    jwt_secret: env.JWT_SECRET
};

module.exports = config;