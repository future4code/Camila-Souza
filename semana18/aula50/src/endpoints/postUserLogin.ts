import { Request, Response } from "express";
import { generateToken } from '../services/authenticator';
import insertUser from "../data/insertUser"
import selectUserByEmail from "../data/selectUserByEmail";

export default async function postUserLogin(
    req: Request,
    res: Response
) {
   try {
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error ("Invalid e-mail")
        }
       
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const user = await selectUserByEmail(
            userData.email
        )

        if (user.password !== userData.password){
            throw new Error("Invalid password")
        }
        
        const token = generateToken({
            id: user.id
        })

        res
        .status(200)
        .send({
            message: "Usuário criado com sucesso",
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