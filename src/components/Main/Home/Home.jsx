import React, { useContext }from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";
import List from "../Search/List";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const Home = () => {
  const { pokemons, deletePokemon } = useContext(pokemonsContext)


  return <section className="home">
    <img className="home-title-pokemon" src="/assets/pokemon-title-color.png" alt="" />
    {pokemons.length > 0 ? <List pokemons={pokemons} delete={deletePokemon} search={false}/> : 
    <><article className="home-start-article"><h3>You didn´t add any Pokemon yet!!</h3><div>

      <Link to={'/search'}>
      <Button className="home-left-button" variant="dark">Get them all!</Button>
      </Link>
      <Link to={'/new'}>
      <Button className="home-right-button" variant="dark">Create Yours!</Button>
      </Link>

      
    
    </div></article></>}
  </section>;
};

export default Home;
