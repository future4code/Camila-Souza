import { Request, Response } from "express";
import updateUser from "../data/updateUser";

export default async function editUser(req:Request, res:Response) {
    try {
        // Validar entradas da requisicão
        if(
            req.body.name === "" ||
            req.body.nickname === "" ||
            req.body.email === ""
        ) {
            res.status(400).send({
                message: "Nenhum campo deve ficar vazio!"
        })
        return
    }

        if(
            !req.body.name &&
            !req.body.nickname &&
            !req.body.email
        ) {
            res.status(400).send({
                message: "Preencha ao menos 1 dos campos para alterá-lo!"
        })
        return
    }

        // Consultar o banco de dados
        await updateUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email
        )

        // Responder a requisição
        res.status(200).send({
            message: "Usuário atualizado!"
    })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}