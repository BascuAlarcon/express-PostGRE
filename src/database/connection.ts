import pg from 'pg'
const { Pool } = pg

export const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    port: 5433,
    password: "secret",
    allowExitOnIdle: true
})

async function dbConnect() {
    try {
        await pool.query('SELECT NOW()')
        console.log('Database connected')
    } catch (e) {
        console.log(e)
    }
}

dbConnect();