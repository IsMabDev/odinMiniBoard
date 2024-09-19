const pool = require("./pool");

async function createMiniBoardTable() {
  const createTable = `CREATE TABLE IF NOT EXISTS miniBoardMessages(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
username VARCHAR(255),
message TEXT,
dateOfMessage TIMESTAMPTZ
)`;
  try {
    // Execute the query
    await pool.query(createTable);
    console.log("Table 'miniBoardMessages' created (if not already exists).");
  } catch (err) {
    console.error("Error creating table:", err.stack);
  }
}

async function GetAllMessagesFromTable() {
  const { rows } = await pool.query("SELECT * FROM miniBoardMessages");
  return rows;
  
}

async function insertNewMessage(
  userNewMessage,
  textNewMessage,
  dateNewMessage
) {
  console.log('dateNewMessage: ', dateNewMessage);
  console.log('textNewMessage: ', textNewMessage);
  console.log('userNewMessage: ', userNewMessage);
  const { rows } = await pool.query(
    `INSERT INTO miniBoardMessages  VALUES (DEFAULT,'${userNewMessage}','${textNewMessage}','${(new Date()).toISOString()}') `
  );
    
      

  return rows;
}

module.exports = {
  createMiniBoardTable,
  GetAllMessagesFromTable,
  insertNewMessage,
};


