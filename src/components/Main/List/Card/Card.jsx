import React from "react";

const Card = (props) => {


  const capPokeName = props.pokemon.name ? props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) : ''; // Para que si hay nombre lo transforme a mayuscula la primera

  return (
    Object.keys(props.pokemon).length !== 0 ?
      (
        props.pokemon.error ?
          <div>
            <p>{props.pokemon.error}</p>
          </div> :
          <div>
            <img src={props.pokemon.sprites.front_default} alt="" />
            {capPokeName ? <p> Name: {capPokeName}</p> : <></>}
          </div>
      ) : 
      <></>
  )
};

export default Card;
