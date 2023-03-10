import React, {Suspense, lazy} from "react";

import { v4 as uuidv4 } from 'uuid'
const PokeCard =  lazy(() => import('./PokeCard'))

const List = (props) => {

  const printPokemons = () => props.pokemons.map(pokemon =>  <Suspense fallback={<div><img src="/assets/loading.webp" alt="Loading..." /></div>} key={uuidv4()}><PokeCard pokemon={pokemon} add={() => props.add(pokemon)} delete={() => props.delete(pokemon)} key={uuidv4()} /></Suspense>)

  return <div className="poke-list">
    {printPokemons()}
  </div>;

};

export default List;