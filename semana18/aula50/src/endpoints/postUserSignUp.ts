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
            name: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email,
            password: req.body.password,
            role: req.body.role,
            logradouro: req.body.logradouro,
            numero: req.body.numero,
            complemento: req.body.complemento,
            bairro: req.body.bairro,
            cpf: req.body.cpf,
            cidade: req.body.cidade,
            estado: req.body.estado
        }

        const id = generateId()

        const user_id = id

        const cypherPassword = await generateHash(userData.password)

        await insertUser(
            id,
            userData.name,
            userData.nickname,
            userData.email,
            cypherPassword,
            userData.role,
            user_id,
            userData.logradouro,
            userData.numero,
            userData.complemento,
            userData.bairro,
            userData.cpf,
            userData.cidade,
            userData.estado
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