import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { pokemonsContext } from "../../../context/pokemonsContext";



const Details = () => {
  const { pokemons } = useContext(pokemonsContext)
  const { id } = useParams()
  console.log(id)
  const pokemon = pokemons.filter(pokemon => pokemon.id === id)[0]
  
  return <div>{pokemon.name}</div>;
};

export default Details;
