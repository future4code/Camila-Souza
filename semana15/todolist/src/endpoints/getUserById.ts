import { Request, Response } from "express";
import selectUserById from "../data/selectUserById";

export default async function getUserById(
    req:Request, 
    res:Response
    ) {
    try {
        // Consultar o banco de dados
        const user = await selectUserById(req.params.id)

        // Validar as saídas do banco de dados
        if(!user){
            res.status(404).send({
                message: "Usuário não encontrado!"
            })
            return
        }

        // Responder a requisição
            res.status(200).send({
                message: "O usuário foi encontrado:",
                id: user.id,
                nickname: user.nickname
            })

         } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}