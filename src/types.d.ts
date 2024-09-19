export interface User{
    id:number,
    username: string,
    password: string,
    email: string,
    name?:string,
    lastname?:string,
    age:number,
    bio?:string
}

export type NewUser = Omit<User,'id'>

export type Validation = 'Error' | 'Success'