import express from "express";
import cors from "cors";
import morgan from "morgan";
import body_parser from "body-parser";
import fetch from "node-fetch";
import axios from "axios";

let marvel_body_api = ""
const app = express()

app.use(morgan('dev'))
app.use(body_parser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())

app.get('/', (request, response) => {
    console.log('response', marvel_body_api)
    // response.end(JSON.stringify(marvel_body_api))
    response.json(marvel_body_api)
})

app.listen(3031, async () => {
    console.log("Marvel aplication started ap port: 3031")
    marvel_body_api = await getMarvelJSON()
})

async function getMarvelJSON() {
    const response = await fetch('http://gateway.marvel.com/v1/public/comics?ts=145774&apikey=eced2c8d75643232a6568ad7e02b9c15&hash=0a08dcef10d803d64fd5da41a1b6a224')
    const jsonConverter = await response.json()
    // console.log(jsonConverter)
    return jsonConverter
}