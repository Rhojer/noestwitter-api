import express from 'express'
import * as userServices from '../services/userServices'

const router = express.Router()

router.post('/', (req, res) =>{

const registered = userServices.addUser(req.body)
//
res.send(registered)
})
export default router