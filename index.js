import express from "express";
import cors from "cors";
import morgan from "morgan";
import body_parser from "body-parser";

const app = express()

app.use(morgan('dev'))
app.use(body_parser.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())

app.get('/', (request , response) => {
    return response.json()
})

app.listen(3031, () => {
    console.log("Pokemon aplication started ap port: 3031")
})

