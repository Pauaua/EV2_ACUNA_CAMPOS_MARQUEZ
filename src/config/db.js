require('dotenv').config();
const mysql = require('mysql2/promise');

// verificar que existan variables de entorno

const requiredEnvVars = ['DB_HOST', 'DB_USER', 'DB_NAME', 'DB_PORT' ];
requiredEnvVars.forEach((varName) => {
    if (!process.env[varName]) {
        throw new Error(`Error, falta la variable: ${varName}`);
    }
});


//Pool de conexiones a la base de datos

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});



module.exports = pool;


