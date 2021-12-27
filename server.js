const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
//
const mysql = require("mysql2");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Internet recommended, don't know where to place it
// socket.setKeepAlive([true][60000]);

// Connect to database
const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    // Your MySQL username,
    user: "root",
    // Your MySQL password
    password: "mysql00",
    database: "election",
  },
  console.log("Connected to the election database.")
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
  console.log(rows);
});

// Default response for any other request (Not Found)
//  MUST BE PLACED LAST (catchall)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
