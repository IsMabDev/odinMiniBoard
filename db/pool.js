const { Pool } = require("pg");
const userName = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const hostname = process.env.DB_HOST;
const port = process.env.DB_PORT;
const database = process.env.DB_NAME;
const DATABASE_URL = `postgres://${userName}:${password}@${hostname}:${port}/${database}`;
// Use the full connection URI from Render
const pool = new Pool({
  connectionString: DATABASE_URL, // DATABASE_URL from Render
  ssl: {
    rejectUnauthorized: false, // This is necessary for secure connection to Render PostgreSQL
  },
});

module.exports = pool;
