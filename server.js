const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });

// Default response for any other request (Not Found)
// MUST BE PLACED LAST ROUTE
app.use((req, res) => {
  res.status(404).end();
});

// Start server at bottom of this file always
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
