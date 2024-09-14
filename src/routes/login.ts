import express from 'express'
import * as userServices from '../services/userServices'
const router = express.Router()
router.get('/', (_req,res) =>{
res.send("login")
})

router.post('/', (req,res) =>{
    const {username, password} = req.body
    const newLogin = userServices.userCompare(username, password)
    res.send(newLogin)
})

export default router