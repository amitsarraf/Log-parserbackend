//const MainModel = require("../models/mainModel");
import { Request, Response } from "express";
const fs = require("fs")
const path = require('path');
const dirPath = path.join(__dirname);
const { promisify } = require('util')


const unlinkAsync = promisify(fs.unlink)

interface MulterRequest extends Request {
    file: any;
}

const getData = async(req:Request, res:Response)=>{
    res.send("hello world")
}

const readData  = async (req:Request, res:Response) => {
    try {
            let filePath =path.join( dirPath , "..", ".." ,"/uploads/" + (req as MulterRequest).file.filename)
            const data = fs.readFileSync(filePath);
            const result = extractData(data.toString())
            await unlinkAsync(filePath)
            res.send(result);

    } catch (error) {
        res.status(400).send(error);
        console.log(error);
    }
}

function extractData(data:any){
    console.log(data)
    let arrdata = data.split("\n")
    let result = []
    console.log(arrdata.length)
    for(var i = 0; i< arrdata.length-1; i++){
        let level = arrdata[i].split("-")[3]
        let msg = arrdata[i].split("details\":\"")[1].split(",")[0]
        let date = new Date( arrdata[i].split(' ')[0])
        let timestamp = date.getTime()
        let transactionId = arrdata[i].split("transactionId\":\"")[1].split(",")[0]
        result.push({timestamp:timestamp , transactionId:transactionId , level: level, msg:msg })
        // console.log(i, level, msg.substring(0, (msg.length-1)))
        // console.log(result)
    }
    return result
}
module.exports = {
    readData,
    getData
 }