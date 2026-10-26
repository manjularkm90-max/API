Now let's build a working Product API using Express.js. This practical combines middleware, validation, CRUD operations and error handling.

const express = require("express");

const app = express();
const PORT = 3000;

// Middleware 1: Parse JSON request bodies
app.use(express.json());

// Middleware 2: Log every request
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// Temporary in-memory data
let products = [
    { id: 1, name: "Keyboard", price: 800 },
    { id: 2, name: "Mouse", price: 400 }
];

let nextId = 3;
