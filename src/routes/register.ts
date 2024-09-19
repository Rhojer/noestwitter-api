import express from 'express'
import * as userServices from '../services/userServices'
import {registerUser} from '../controllers/user'
import {NewUser, Validation} from '../types'
const router = express.Router()

router.post('/', async (req, res) =>{
const registered:Validation = await userServices.addUser(req.body)

if(registered === 'Success'){
res.status(200).json({msg: 'usuario creado satisfactoriamente'})
}
else
res.json({err:'Error usuario ya existe '})
})
export default router