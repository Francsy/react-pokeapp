import React, { useContext }from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";
import List from "../Search/List";
import { Link } from 'react-router-dom'
const Home = () => {
  const { pokemons } = useContext(pokemonsContext)


  return <section>
    <h1>Your Pokemon List</h1>
    {pokemons.length > 0 ? <List pokemons={pokemons} /> : 
    <><p>You didn´t add any Pokemon</p><Link to={'/search'}><button>Get them all!</button></Link><p>or</p>
    <Link to={'/new'}><button>Create yours!</button></Link></>}
  </section>;
};

export default Home;
