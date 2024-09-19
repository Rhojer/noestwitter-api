import mysql from 'mysql2/promise'

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'noestwitter_api'
})
