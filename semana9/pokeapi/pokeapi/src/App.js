import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { BASE_URL_API } from "./assets/constants/url";
import PokeCard from "./assets/components/PokeCard/pokecard";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [pokeName, setPokeName] = useState("");
  const changePokeName = (event) => {
    setPokeName(event.target.value);
  }
  useEffect(()=>{
    axios
    .get(`${BASE_URL_API}/?limit=151`)
    .then(response => {
      setPokeList(response.data.results);
    })
    .catch(error => {
      console.log(error)
    })
  }, [])

  return (
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon =>{
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          )
        })}
      </select>
      {pokeName && <PokeCard pokemon={pokeName} />}
    </div>
  );
}

export default App;
