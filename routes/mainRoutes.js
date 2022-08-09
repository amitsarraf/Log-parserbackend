const router = require('express').Router();
const multer = require('multer');
const {readData} = require('../controllers/mainController')

const upload = multer({dest:'uploads/'});
//const {upload} = require('../lib/file')

//console.log(upload)
router.post("/", upload.single("file"), readData)
//router.post("/movie", postMovie)

module.exports = {
    routes: router
}
