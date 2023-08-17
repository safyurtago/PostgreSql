const pg = require('pg');
// const config = 

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'safyur',
    database: 'postgres',
    port: 5432
});


const fetchAll = async (SQL, params) => {
    const client = await pool.connect();
    try {
        const {rows: data} = await client.query(SQL, params);
        return data
    } catch (error) {
        console.log("db error: " + error.message);
    } finally {
        client.release();
    }
}

module.exports = {fetchAll};