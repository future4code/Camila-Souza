import { countActorsByGender } from './../data/countActorsByGender';
import { Response } from 'express';
import { Request } from 'express';

export const getActorsCountByGender = async (req: Request, res: Response) => {
    try{
        const actorsByGender = await countActorsByGender(req.params.gender)
        res.status(200).send(actorsByGender)
    } catch(error){
        console.log(error)
        res.send(error.message)
    }
}