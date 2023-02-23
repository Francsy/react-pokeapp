import React, { useContext } from "react";
import { useParams, useLocation } from "react-router-dom";
// import { pokemonsContext } from "../../../context/pokemonsContext";

const Details = () => {
  // const { pokemons } = useContext(pokemonsContext)
  
  const { id } = useParams()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const name = params.get('name');
  const image= params.get('image')
  const typeOne= params.get('typeOne')
  const typeTwo= params.get('typeTwo')
  const stringOfAbilities = params.get('abilities')
  const stringOfMoves = params.get('moves')
  const stringOfSmallImages = params.get('smallImages')
  const stringOfBigImages = params.get('bigImages')
  const abilities = JSON.parse(stringOfAbilities)
  const moves = JSON.parse(stringOfMoves)
  const smallImages = JSON.parse(stringOfSmallImages)
  const bigImages = JSON.parse(stringOfBigImages)
  const weight = params.get('moves')
  const capName = name.charAt(0).toUpperCase() + name.slice(1)

  // console.log(abilities)
  // console.log('moves:');
  // console.log(moves);
  // console.log('small:');
  // console.log(smallImages);
  // console.log('big:');
  // console.log(bigImages);
  // console.log(weight);
  
  return <section>
    <article>
      <h2>{capName} data:</h2>
      <img src={image} alt="Main img" />
    </article>
    <article></article>
    <article></article>
  </section>;
};

export default Details;
