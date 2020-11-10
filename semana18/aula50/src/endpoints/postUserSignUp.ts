import { Request, Response } from "express";
import generateId from "../services/generateId";
import { generateToken } from '../services/authenticator';
import insertUser from "../data/insertUser"
import { generateHash } from "../services/hashManager";


export default async function postUserSignUp(
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
            password: req.body.password,
            role: req.body.role
        }

        const id = generateId()

        const cypherPassword = await generateHash(userData.password)

        await insertUser(
            id,
            userData.email,
            cypherPassword,
            userData.role
        )

        const token = generateToken({
            id,
            role: userData.role
        })

        res
        .status(200)
        .send({
            message: "User successfuly created",
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