import React, {useContext}from "react";
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
        <Card className="poke-card" border="dark" style={{ width: '20rem' } }>
        <Card.Header >
      <Card.Img variant="top" src={props.pokemon.image} />
      </Card.Header>
      <Card.Body  >
        <Card.Title><strong>#{props.pokemon.id}: Wild {capitalize(props.pokemon.name)} appeared!</strong></Card.Title>
        
        <Card.Text>Type: {capitalize(props.pokemon.typeOne)}</Card.Text>
        <Link to={`/pokemon/${props.pokemon.id}?name=${props.pokemon.name}&image=${props.pokemon.image}&typeOne=${props.pokemon.typeOne}&typeTwo=${props.pokemon.typeTwo}&abilities=${JSON.stringify(props.pokemon.abilities)}&moves=${JSON.stringify(props.pokemon.moves)}&smallImages=${JSON.stringify(props.pokemon.smallImages)}&bigImages=${JSON.stringify(props.pokemon.bigImages)}&weight=${props.pokemon.weight}`}>
        <Button className="left-button" variant="dark" size="lg">DETAILS</Button>
        </Link>
        {props.search ? (isAdded ? 
        <Button  className='pokeball-button right-button' onClick={props.delete} variant="dark" size="lg"><img className="close-pokeball-img" src="/assets/close-pokeball.png" alt="" /></Button>
        : <Button className="pokeball-button right-button" onClick={props.add} variant="dark" size="lg"><img className="open-pokeball-img right-button" src="/assets/open-pokeball.png" alt="" variant="dark"/></Button>)
        : <Button className="pokeball-button right-button" onClick={props.delete} variant="dark" size="lg"><img className="open-pokeball-img right-button" src="/assets/open-pokeball.png" alt=""/></Button>}

      </Card.Body>
    </Card>
        /* <article>
          <img src={props.pokemon.image} alt="" />
          <h2>{capPokeName}</h2>
          <p>Type: {props.pokemon.typeOne}</p>
          <div>
          <Link to={`/pokemon/${props.pokemon.id}?name=${props.pokemon.name}&image=${props.pokemon.image}&typeOne=${props.pokemon.typeOne}&typeTwo=${props.pokemon.typeTwo}&abilities=${JSON.stringify(props.pokemon.abilities)}&moves=${JSON.stringify(props.pokemon.moves)}&smallImages=${JSON.stringify(props.pokemon.smallImages)}&bigImages=${JSON.stringify(props.pokemon.bigImages)}&weight=${props.pokemon.weight}`}>
            <button>More details</button>
          </Link>
          
          {props.search ? (isAdded ? <button onClick={props.delete}><img src="/assets/close-pokeball.png" alt=""/></button> : <button onClick={props.add}><img src="/assets/open-pokeball.png" alt=""/></button>) : <button onClick={props.delete}><img src="/assets/open-pokeball.png" alt=""/></button>}
          </div>
        </article> */
      )
  )
};

export default PokeCard;



/* 
import React, {useContext}from "react";
import { Link } from 'react-router-dom'
import { pokemonsContext } from '../../../../../context/pokemonsContext'


const Card = (props) => {

  const { pokemons } = useContext(pokemonsContext)
  

  const capPokeName = props.pokemon.name ? props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) : ''; // Para que si hay nombre lo transforme a mayuscula la primera
  const isAdded = pokemons.some(pokemon => pokemon.name === props.pokemon.name)

  return (
      (
        <article>
          <img src={props.pokemon.image} alt="" />
          <h2>{capPokeName}</h2>
          <p>Type: {props.pokemon.typeOne}</p>
          <div>
          <Link to={`/pokemon/${props.pokemon.id}?name=${props.pokemon.name}&image=${props.pokemon.image}&typeOne=${props.pokemon.typeOne}&typeTwo=${props.pokemon.typeTwo}&abilities=${JSON.stringify(props.pokemon.abilities)}&moves=${JSON.stringify(props.pokemon.moves)}&smallImages=${JSON.stringify(props.pokemon.smallImages)}&bigImages=${JSON.stringify(props.pokemon.bigImages)}&weight=${props.pokemon.weight}`}>
            <button>More details</button>
          </Link>
          
          {props.search ? (isAdded ? <button onClick={props.delete}><img src="/assets/close-pokeball.png" alt=""/></button> : <button onClick={props.add}><img src="/assets/open-pokeball.png" alt=""/></button>) : <button onClick={props.delete}><img src="/assets/open-pokeball.png" alt=""/></button>}
          </div>
        </article>
      )
  )
};

export default Card; */




/* 
import React from "react";
import { Link } from 'react-router-dom'


const Card = (props) => {


  const capPokeName = props.pokemon.name ? props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) : ''; // Para que si hay nombre lo transforme a mayuscula la primera

  return (
      (
        <div>
          <img src={props.pokemon.image} alt="" />
          <Link to={`/pokemon/${props.pokemon.id}?name=${props.pokemon.name}&image=${props.pokemon.image}&typeOne=${props.pokemon.typeOne}&typeTwo=${props.pokemon.typeTwo}&abilities=${JSON.stringify(props.pokemon.abilities)}&moves=${JSON.stringify(props.pokemon.moves)}&smallImages=${JSON.stringify(props.pokemon.smallImages)}&bigImages=${JSON.stringify(props.pokemon.bigImages)}&weight=${props.pokemon.weight}`}>
          <p>{capPokeName}</p>
          </Link>
        </div>
      )
  )
};

export default Card;
 */