import React, { useContext } from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";

const New = () => {
  const { pokemons, setNewPokemon } = useContext(pokemonsContext)
  return <div>New</div>;
};

export default New;
