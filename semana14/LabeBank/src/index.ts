import express, { Express, Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app: Express = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response)=>{
    try {
        const { name, CPF, dateOfBirthAsString } = req.body

        const [day, month, year] = dateOfBirthAsString.split("/")

        const dateOfBirth: Date = new Date(`${year}-${month}-${day}`)

        // Validar as entradas da requisição
        const ageInMilliseconds: number = Date.now() - dateOfBirth.getTime()

        const ageInYears: number = ageInMilliseconds / 1000 / 60 / 60 / 24 / 365

        if(ageInYears < 18){
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }

        // Consultar ou alterar a base de dados
        accounts.push({
            name,
            CPF,
            dateOfBirth,
            balance: 0,
            statement: []
        })
        // Validar os resultados da consulta
        // Enviar a resposta
        res.status(201).send("Conta criada com sucesso!")
    }catch (error){
        res.send(error.message)
        console.log(error)
    }
})

app.get("/users/all", (req: Request, res: Response)=>{
    try{
        if(!accounts.length){
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }
        res.status(200).send(accounts)
    }catch(error){
        res.send(error.message)
        console.log(error)
    }
})

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})