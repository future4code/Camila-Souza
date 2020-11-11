import { Request, Response } from "express";
import { generateToken } from '../services/authenticator';
import selectUserByEmail from "../data/selectUserByEmail";
import { compare } from "bcryptjs";

export default async function postUserLogin(
    req: Request,
    res: Response
): Promise<void> {
   try {
       let message = "User loged in"

        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error ("Invalid e-mail or password")
        }
       
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await selectUserByEmail(
            userData.email
        )
        
        const passwordTrue: boolean = await compare(
            userData.password, 
            user.password)

        if (!passwordTrue){
            throw new Error("Invalid e-mail or password")
        }

        const token = generateToken({
            id: user.id,
            role: user.role
        })

        res
        .status(200)
        .send({
            message,
            token
        })

   } catch (error) {
       res
       .status(400)
       .send({
           message: error.message
       })
   } 
}