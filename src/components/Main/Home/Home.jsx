import React, { useContext }from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";
import List from "../Search/List";
const Home = () => {
  const { pokemons } = useContext(pokemonsContext)


  return <section>
    <h1>Your Pokemon List</h1>
    {pokemons.length > 0 ? <List pokemons={pokemons} /> : <></>}
  </section>;
};

export default Home;
