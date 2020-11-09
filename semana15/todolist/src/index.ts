import express, { Express } from "express";
import knex from "knex";
import dotenv from "dotenv";
import createUser from "./endpoints/createUser";
import getUserById from "./endpoints/getUserById";
import editUser from "./endpoints/editUser";
import createTask from "./endpoints/createTask";
import getTaskById from "./endpoints/getTaskById";

dotenv.config()

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})

const app: Express = express()
app.use(express.json())

app.put("/user", createUser)

app.get("/user/:id", getUserById)

app.post("/user/edit/:id", editUser)

app.put("/task", createTask)

app.get("/task/:id", getTaskById)

const server = app.listen(3003, ()=>{
    if (server) {
        console.log("Servidor rodando na porta 3003")
    } else {
        console.error("Falha em iniciar o servidor")
    }
})
