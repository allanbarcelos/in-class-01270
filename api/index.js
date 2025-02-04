// NODEJS

// Declare the libraries

const express = require("express");
const mysql = require("mysql2/promise");

const app = express();
const port = 3000;

app.use(express.json());

// HTTP VERBS: POST, GET, PUT, PATCH, OPTIONS

// first endpoint
// GET
app.get("/", (req, res) => {
  res.status(200).json({ message: "API is runing" });
});


app.listen(port, () => {
    console.log(`The server is runing, PORT: ${port}`);
})