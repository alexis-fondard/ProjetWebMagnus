// const express = require("express");
// const dotEnv = require('dotenv')
// const path = require('path')
// const port = process.env.PORT || 8080;
// const app = express();

// dotEnv.config({
//     path: path.join(__dirname, ".env")
// });

// app.use(express.static(__dirname + "/dist/"));
// app.get(/.*/, function (req, res) {
//     res.sendFile(__dirname + "/dist/index.html");
// });
// app.listen(port);

// console.log("Server started...");

const express = require('express');
const app = express();

// Serve all the files in '/dist' directory
app.use(express.static('dist'));


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});