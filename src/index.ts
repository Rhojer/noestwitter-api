import express from 'express'

const app = express()
app.use(express.json())

const PORT = 3000
app.get("/",(req,res) => {
    res.send("hola hola")
})





app.listen(PORT, ()=>{
    console.log(`listen on port: ${PORT}`)
})