import React from "react";
import { Link } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid'


const PokeCarousel = (props) => {
  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

  const printPokemons = () => props.pokemons.map(pokemon =>
    <Carousel.Item className="poke-carousel-item" indicators={false} interval={5000} key={uuidv4()}>
      <img
        className="d-block w-100 carousel-image"
        src={pokemon.image}
        alt=""
      />
      <div className="poke-card">
        <h1><strong>#{pokemon.id} {capitalize(pokemon.name)}</strong></h1>
        <h2>Type: {capitalize(pokemon.typeOne)}</h2>
        <div className="poke-card-buttons">
        <Link to={`/pokemon/${pokemon.id}?name=${pokemon.name}&image=${pokemon.image}&typeOne=${pokemon.typeOne}&typeTwo=${pokemon.typeTwo}&abilities=${JSON.stringify(pokemon.abilities)}&moves=${JSON.stringify(pokemon.moves)}&smallImages=${JSON.stringify(pokemon.smallImages)}&bigImages=${JSON.stringify(pokemon.bigImages)}&weight=${pokemon.weight}`}>

        <Button className="left-button" size="lg" variant="dark"><strong>DETAILS</strong></Button>
        </Link>
        <Button className="pokeball-button right-button" size="lg" onClick={() => props.delete(pokemon)} variant="dark" ><img className="open-pokeball-img right-button" src="/assets/open-pokeball.png" alt="" /></Button>
        </div>
      </div>
      
    </Carousel.Item>

  )

  // <Card pokemon={pokemon} add={() => props.add(pokemon)} delete={() => props.delete(pokemon)} search={props.search} key={uuidv4()} />)

  return <Carousel className="poke-carousel" variant="dark">
      {printPokemons()}
    </Carousel>
 
};

export default PokeCarousel;
