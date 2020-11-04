import { Pokemon } from './../types';
import { connection } from './../index';

export async function searchPokemonByName(
    name: string
):Promise<Pokemon[]> {
    try{
        const result = await connection 
            .select("*")
            .from("pokemons")
            .where("name", "LIKE", `%{name}%`)
        console.log(result)
        return (result)
    }catch(error){
        console.log(error)
        return[]
    }
}
searchPokemonByName("a")