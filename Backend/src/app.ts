import express, { Application } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const app: Application = express()

app.get('/',(req,res)=>{
    res.send(`The Damn Server is Working `)
})


const PORT = process.env.PortNumber
app.listen(PORT, () => console.log(`server is running : ${PORT}`))

