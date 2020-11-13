import { tableUsers, tableFollow } from './../constants/tables';
import { connection } from './../constants/connection';
import { User } from "../types/user";

export default async function selectFeed(
    id:string
    ) {
        await connection(tableFollow)
        .select("following_id")
        .where({ "followee_id": id })
        await connection(tableUsers)
        .select("*")

//         return selectFeed[0]
//     } catch (error) {
//         throw new Error(error.message)
//     }
}