import { Request, Response } from "express";
import selectUserByEmail from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";
import { comparePassword } from "../services/hashManager";
import { User } from "../types/user";

export default async function login(
    req:Request,
    res:Response
    ): Promise<void> {
        const { email, password }: User = req.body
    let message = "User loged in"
    try {
        if(!email || email.indexOf("@") === -1){
            res.statusCode = 406
            message = "Invalid e-mail or password"
            throw new Error(message)
        }
        const user = await selectUserByEmail(
            email)

        const passwordTrue: boolean = await comparePassword(
            password,
            user.password
        )

        if(!passwordTrue){
            res.statusCode = 406
            message = "Invalid e-mail or password"
            throw new Error(message)
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
            message: error.message || error.sqlMessage
        })
    }
}