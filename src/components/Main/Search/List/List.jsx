import React from "react";
import PokeCard from './PokeCard'
import { v4 as uuidv4 } from 'uuid'

const List = (props) => {

  const printPokemons = () => props.pokemons.map(pokemon => <PokeCard pokemon={pokemon} add={() => props.add(pokemon)} delete={() => props.delete(pokemon)} key={uuidv4()} />)

  return <div>
    {printPokemons()}
  </div>;
};

export default List;