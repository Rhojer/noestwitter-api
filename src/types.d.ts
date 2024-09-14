export interface User{
    id:number,
    username: string,
    password: string,
    email: string,
    personalInfo:{
        name?:string,
        lastname?:string,
        age:number,
        bio?:string
    }
}

export type NewUser = Omit<User,'id'>