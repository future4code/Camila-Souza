import { Response } from 'express';
import { Request } from 'express';
import { searchActorByName } from '../data/searchActorByName';

export const getActorByName = async (req: Request, res: Response) => {
    try{
        const actorByName = await searchActorByName(req.params.name)
        res.status(200).send(actorByName)
    } catch(error){
        console.log(error)
        res.send(error.message)
    }
}