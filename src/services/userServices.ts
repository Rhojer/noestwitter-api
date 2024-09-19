import express from 'express'
import {User,NewUser, Validation} from '../types'
import {registerUser, getUserByName} from '../controllers/user'

export const addUser = async (dataUser:NewUser):Promise<Validation> =>{
    const result:Validation = await registerUser(dataUser)
    return result 
}
export const userCompare = async(username:string, password:string):Promise<Validation | User> =>{

    const user = getUserByName(username)
    if(password === (await user).password){
        return (user)
    }
    else return 'Error' 
}