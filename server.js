const db = require("./db/connection");
const apiRoutes = require("./routes/apiRoutes");

const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

const inputCheck = require("./utils/inputCheck");

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Router middleware, used to direct to apiRoutes, it will find index.js by default
app.use("/api", apiRoutes);

// Default response for any other request (Not Found)
//  MUST BE PLACED LAST of app.use (catchall)
app.use((req, res) => {
  res.status(404).end();
});

// Start server AFTER DB connection
db.connect((err) => {
  if (err) throw err;
  console.log("Database connected.");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
