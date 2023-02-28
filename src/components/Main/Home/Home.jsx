import React, { useContext, useState, useEffect }from "react";

import { pokemonsContext } from "../../../context/pokemonsContext";
import List from "../Search/List";
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const Home = () => {
  const { pokemons, deletePokemon } = useContext(pokemonsContext)
  const [buttonSize, setButtonSize] = useState('')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setButtonSize("lg");
      } else {
        setButtonSize("");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <section className="home">
    <img className="home-title-pokemon" src="/assets/pokemon-title-color.png" alt="" />
    {pokemons.length > 0 ? <List pokemons={pokemons} delete={deletePokemon} search={false}/> : 
    <><article className="home-start-article"><h3>You didn´t add any pokemon yet!!</h3><div>

      <Link to={'/search'}>
      <Button className="home-left-button" size={buttonSize} variant="dark">Get them all!</Button>
      </Link>
      <Link to={'/new'}>
      <Button className="home-right-button" size={buttonSize} variant="dark">Create yours!</Button>
      </Link>

    </div></article></>}
  </section>;
};

export default Home;
