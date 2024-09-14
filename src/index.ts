import express from 'express'
import loginRouter from './routes/login'
import registerRouter from './routes/register'
const app = express()
app.use(express.json())

const PORT = 3000
app.get("/",(req,res) => {
    res.send("hola hola")
})
app.use('/api/login', loginRouter)
app.use('/api/register',registerRouter)



app.listen(PORT, ()=>{
    console.log(`listen on port: ${PORT}`)
})