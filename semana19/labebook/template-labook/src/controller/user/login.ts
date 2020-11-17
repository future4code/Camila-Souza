import { loginBusiness } from './../../business/user/loginBusiness';
import { Request, Response } from "express";

export default async function login(
    req:Request,
    res:Response
    ): Promise<void> {
        try {
            const loginInput ={ 
                email: req.body.name,
                password: req.body.password }
      
            const token: string = await loginBusiness(loginInput)
      
            res
            .status(200)
            .send({ token })
      
         } catch (error) {
            res
            .status(400)
            .send({ message: error.message })
         }
      }