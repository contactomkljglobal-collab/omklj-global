const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* TEST ROUTE */

app.get("/", (req, res) => {

res.send("OMKLJ Global Backend Running 🚀");

});

/* PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

console.log(`Server running on port ${PORT}`);

});
