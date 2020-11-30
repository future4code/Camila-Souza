import { User } from './../types/user';
import { Request, Response } from "express";
import { getTokenData } from "../services/authenticator";
import selectUserById from '../data/selectUserById';
import { generateHash } from '../services/hashManager';
import updatePassword from '../data/updatePassword';
import writeEmail from '../services/mailer';

export async function resetPassword(
    req:Request,
    res:Response
    ): Promise<void> {
    const token = req.headers.authorization as string
    const auth = getTokenData(token)

    let errorCode = 400
    let message = "Password updated"

    try {
        if(!auth){
            errorCode = 401
            message = "Unauthorized"
            throw new Error(message)
        }

        const newPassword: string = req.body.password
        const hashPassword: string = await generateHash(newPassword)
        const { id, name, email }: User = await selectUserById(auth.id)

        await updatePassword(id, hashPassword)

        await writeEmail(
            "Cookenu - security <security-noreply@cookenu.com>",
            email,
            `${name}, your password was updated`,
            `${name}, you updated your Cookenu's password`,
            `<h3>Hello, <strong>${name}</strong>!</h3>
            <p>You updated your Cookenu's password.</p>
            <p>Thank you for being part of our Cookenu's family.</p>
            <h4><strong>Cookenu's staff</strong></h4>
            <p><strong>It wasn't you?</strong> Please, <a href="mailto:security-alert@cookenu.br">contact us</a> immediatly.</p>`
        );

        res
        .status(200)
        .send(message)

    } catch (error) {
        res
        .send(errorCode)
        .send({
            message: "Ops... Update failed. We're sorry this happened. We're working on it."
        })
    }
}