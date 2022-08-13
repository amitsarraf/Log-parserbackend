"use strict";
const express = require('express');
const app = express();
// const mongoose = require('mongoose');
const cors = require("cors");
const bodyParser = require('body-parser');
//const path = require('path');
const mainRoutes = require('./routes/mainRoutes');
//console.log(mainRoutes, "data")
//global.__basedir = __dirname;
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));
app.use('/api', mainRoutes.routes);
const PORT = process.env.PORT || 5000;
// mongoose.connect("mongodb://localhost:27017/logParserApp", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// mongoose.connection
//   .once("open", function () {
//     console.log("Database Connected Succesfully");
//   })
//   .on("error", function (error) {
//     console.log("Error in connecting database", error);
//   });
app.listen(PORT, () => {
    console.log(`server is running on port ${PORT} `);
});
//# sourceMappingURL=server.js.map