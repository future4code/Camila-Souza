import { Response } from 'express';
import { Request } from 'express';
import { getAddressFromCEP } from '../services/getAddressFromCEP';

export default async function getAddressByCEP(
    req:Request,
    res:Response
    ) {
    try {
        const cep = Number(req.params.cep)
        const address = await getAddressFromCEP(cep)

        res
        .status(200)
        .send(address)

    } catch (error) {
        res
        .send(error)
        .send({message: "Vixi! Não rolou"})
    }
}