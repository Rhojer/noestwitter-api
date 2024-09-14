import express from 'express'
import {User,NewUser} from '../types'

export const addUser = (user:any):User =>{
    const {name,lastname,age, email, username,password} = user
    const newUser:User = { //cambiamos por el tipo NewUser
        username:username,
        password:password,
        email:email,
        personalInfo:{
            name:name,
            lastname:lastname,
            age:age
        }
    }
// Query add user

return newUser //cambiamos y devolvemos el resultado de la query de tipo User
}
export const userCompare = (username:string, password:string):User =>{
console.log('usuario comparado' + username + password)
const userLoged = {
    username:username,
    password:password,
    email:"dlaskda@gmail.com",
    personalInfo:{
        name:username,
        age:18
    }
}
return (userLoged)
}