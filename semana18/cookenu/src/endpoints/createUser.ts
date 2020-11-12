import { Request, Response } from "express";
import { stringify } from "querystring";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import generateId from "../services/generateId";
import { generateHash } from "../services/hashManager";
import { User } from "../types/user";

export default async function createUser(
    req: Request,
    res: Response
    ) {
    const { name, email, password }: User = req.body
    let message = "User created"

    try {
        if(!email || email.indexOf("@") === -1){
            res.statusCode = 406
            message = "Invalid e-mail"
            throw new Error(message)
        }
        if(!password || password.length < 6) {
            res.statusCode = 406
            message = "Password should be at least 6 character long"
            throw new Error(message)
        }
        if(!name){
            res.statusCode = 406
            message = "Insert a name, please"
            throw new Error(message)
        }
        const id: string = generateId()
        const cypherPassword: string = await generateHash(password) 

        await insertUser({
            id,
            name,
            email,
            password: cypherPassword
    })

        const token: string = generateToken({
            id
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
            message: error.message || error.sqlMessage
        })
    }
}