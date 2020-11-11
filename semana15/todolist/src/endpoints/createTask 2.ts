import { Request, Response } from "express";
import moment from "moment";
import insertTask from "../data/insertTask";

export default async function createTask(req:Request, res:Response) {
    try {
        // Validar entradas da requisicão
        if(
            !req.body.title ||
            !req.body.description ||
            !req.body.deadline ||
            !req.body.authorId
        ){
            res.status(400).send({
                message: "Opa! Todos os campos devem ser preenchidos"
            })

            return
        }
        const dateDiff: number = moment(req.body.deadline, "DD/MM/YYYY").unix() - moment().unix()
        if(dateDiff <= 0){
            res.status(400).send({
                message: "Opa! Esse dia já passou! Verifique a 'deadline' e tente novamente!"
            })
            
            return
        }

        // Consultar o banco de dados
        const id: string = Date.now() + Math.random().toString()

        await insertTask(
            id,
            req.body.title,
            req.body.description,
            moment(req.body.deadline, "DD/MM/YYYY").format("YYYY-MM-DD"),
            req.body.authorId
        )

        // Responder a requisição
        res.status(200).send({
            message: "Tarefa inserida com sucesso!",
            id
        })

    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}