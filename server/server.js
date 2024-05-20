const express = require("express");
const notesRouter = require("./routes/api/notes");
require("dotenv").config();
require("./database");

const app = express();
const port = process.env.PORT || 5001;

// Middleware to parse JSON
app.use(express.json());

// Use the notes routes for any requests that start with /api/notes
app.use("/api/notes", notesRouter);

app.get("/", (req, res) => res.send("MongoDB Running on Port 5001")); // Test route

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
