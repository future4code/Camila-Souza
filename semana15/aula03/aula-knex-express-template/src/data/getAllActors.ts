import { connection } from "../index";
import express, { Request, Response } from "express";

export async function getAllActors(req:Request, res:Response): Promise<void> {
    try{
        const result = await connection.raw(`SELECT * FROM Actor`)
        console.log(result[0])
        res
        .status(200)
        .send(result[0])
    } catch(error){
        console.log(error)
        res
        .status(400)
        .send(error.message)
    }
}
