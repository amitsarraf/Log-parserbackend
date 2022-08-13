"use strict";
const router = require('express').Router();
const multer = require('multer');
const mainController = require('../controllers/mainController');
const upload = multer({ dest: 'uploads/' });
//const {upload} = require('../lib/file')
//console.log(upload)
router.post("/", upload.single("file"), mainController.readData);
router.get("/", mainController.getData);
//router.post("/movie", postMovie)
module.exports = {
    routes: router
};
//# sourceMappingURL=mainRoutes.js.map