// import express
const cors = require("cors");

// import bodyParser
const bodyParser = require("body-parser");

// import express
const express = require("express");

// init app
const app = express();

// use cors
// cors untuk menggunakan permintaan HTTP untuk mengizinkan browser pada suatu domain mendapatkan akses ke server
app.use(cors());

// use bodyparser
// body parser berisi middleware untuk membaca sebuah data yang dikirimkan oleh HTTP requrest dan menyimpannya sebagai object
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// define port
const port = 3210;

// router
app.get("/", (req, res) => {
  res.send("Hello world");
});

// start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
