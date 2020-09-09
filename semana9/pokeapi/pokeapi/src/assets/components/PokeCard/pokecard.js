import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL_API } from "../../constants/url";


function PokeCard () {
    const [pokemon, setPokemon] = useState({});
}
    // pegaPokemon = pokeName => {
    //     axios
    //     .get(`${BASE_URL_API}/${pokeName}`)
    //     .then(response => {
    //         setPokemon(response.data)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }
    useEffect((prevProps)=>{
        axios
        .get(`${BASE_URL_API}/${pokeName}`)
        .then(response => {
            if (prevProps.pokemon !== props.pokemon) {
                pegaPokemon(props.pokemon);
                }
        })
        .catch(error => {
            console.log(error)
        })
        
    }, [BASE_URL_API, pokeName, setPokemon])
    const pokemon = pokemon;

    return (
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} Kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (
                <img src={pokemon.sprites.front_default} alt={pokemon.name}/>
            )}
        </div>
    )

export default PokeCard