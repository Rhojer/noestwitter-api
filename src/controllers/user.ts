import { QueryResult } from 'mysql2'
import {pool} from '../mysql/dbapi'
import {User,NewUser,Validation} from '../types'

export const registerUser = async(user:NewUser):Promise<Validation>=>{
    const control = await getUserByName(user.username)
    if(typeof control == 'object'){
        return "Error"
    }else{
    await pool.query(`INSERT INTO user SET ?`, [user] )
    return 'Success'
    }
}
export const getUserByName = async(username:string):Promise<any>=>{
    const result:any = await pool.query('SELECT * FROM user WHERE username = ?',[username])
    if(!result[0][0]){
        const err:Validation = 'Error'
        return err
    }
    else return result[0][0]

}