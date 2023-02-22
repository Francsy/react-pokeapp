import React from "react";

const Card = (props) => {


  const capPokeName = props.pokemon.name ? props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) : ''; // Para que si hay nombre lo transforme a mayuscula la primera

  return (
      (
        <div>
          <img src={props.pokemon.image} alt="" />
          <p>{capPokeName}</p>
        </div>
      )
  )
};

export default Card;
