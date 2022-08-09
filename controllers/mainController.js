const MainModel = require("../models/mainModel");
const fs = require("fs")
const multer = require('multer');
const path = require('path');
const dirPath = path.join(__dirname);
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

const readData  = async (req, res, next) => {
    try {
            let filePath =path.join( dirPath , "..","/uploads/" + req.file.filename)
            const data = fs.readFileSync(filePath);
            const result = extractData(data.toString())
            await unlinkAsync(filePath)
            res.send(result);
    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

function extractData(data){
    console.log(data)
    arrdata = data.split("\n")
    result = []
    console.log(arrdata.length)
    for(i = 0; i< arrdata.length-1; i++){
        level = arrdata[i].split("-")[3]
        msg = arrdata[i].split("details\":\"")[1].split(",")[0]
        result.push({level: level, msg:msg})
        // console.log(i, level, msg.substring(0, (msg.length-1)))
        // console.log(result)
    }
    return result
}
module.exports = {
    readData
 }