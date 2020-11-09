import { createUser } from './../constants/createUser';
import { Request, Response } from "express";
import generateId from "../services/generateId";
import { generateToken } from '../services/authenticator';

export default async function postUser(
    req: Request,
    res: Response
) {
   try {
        if(!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error ("Invalid e-mail")
        }
        if(!req.body.password || req.body.password.length < 6) {
            throw new Error ("Invalid password")
        }

        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        const id = generateId()

        await createUser(
            id,
            userData.email,
            userData.password
        )

        const token = generateToken({
            id
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