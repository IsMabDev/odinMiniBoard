const pool = require("./pool");

async function createMiniBoardTable() {
  const createTable = `CREATE TABLE IF NOT EXISTS miniBoardMessages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message TEXT,
dateOfMessage TIMESTAMPTZ:
)`;
  try {
    // Execute the query
    await pool.query(createTable);
    console.log("Table 'miniBoardMessages' created (if not already exists).");
  } catch (err) {
    console.error("Error creating table:", err.stack);
  }
}


