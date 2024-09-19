import express from 'express'
import * as userServices from '../services/userServices'
import {User, Validation } from '../types'
const router = express.Router()
router.get('/', (_req,res) =>{
res.send("login")
})

router.post('/', async (req,res) =>{
    const {username, password} = req.body
    const newLogin:User | Validation = await userServices.userCompare(username, password)
    if(newLogin == 'Error'){
    res.json({err:'error de usuario o contraseña'})
    }
    else{
    res.send(newLogin)
    }
})

export default router