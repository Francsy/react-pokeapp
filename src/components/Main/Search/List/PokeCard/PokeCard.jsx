import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { pokemonsContext } from '../../../../../context/pokemonsContext'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const PokeCard = (props) => {

  const { pokemons } = useContext(pokemonsContext)
  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);

  const isAdded = pokemons.some(pokemon => pokemon.name === props.pokemon.name)

  return (
    (
      <Card className="poke-card" border="dark" style={{ width: '20rem' }}>
        <Card.Header >
          <Card.Img variant="top" src={props.pokemon.image} />
        </Card.Header>
        <Card.Body  >
          <Card.Title><strong>#{props.pokemon.id}: {isAdded ? `${capitalize(props.pokemon.name)} was caught!` : `Wild ${capitalize(props.pokemon.name)} appeared!`}</strong></Card.Title>

          <Card.Text>Type: {capitalize(props.pokemon.typeOne)}</Card.Text>
          <Link to={`/pokemon/${props.pokemon.id}?name=${props.pokemon.name}&image=${props.pokemon.image}&typeOne=${props.pokemon.typeOne}&typeTwo=${props.pokemon.typeTwo}&abilities=${JSON.stringify(props.pokemon.abilities)}&moves=${JSON.stringify(props.pokemon.moves)}&smallImages=${JSON.stringify(props.pokemon.smallImages)}&bigImages=${JSON.stringify(props.pokemon.bigImages)}&weight=${props.pokemon.weight}`}>
            <Button className="left-button" variant="dark" size="lg">DETAILS</Button>
          </Link>
          {isAdded ?
            <Button className='pokeball-button right-button' onClick={props.delete} variant="dark" size="lg"><img className="close-pokeball-img" src="/assets/close-pokeball.webp" alt="" /></Button>
            : <Button className="pokeball-button right-button" onClick={props.add} variant="dark" size="lg"><img className="open-pokeball-img right-button" src="/assets/open-pokeball.webp" alt="" variant="dark" /></Button>}

        </Card.Body>
      </Card>
    )
  )
};

export default PokeCard;