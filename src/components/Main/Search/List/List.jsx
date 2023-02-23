import React from "react";
import Card from './Card'
import { v4 as uuidv4 } from 'uuid'

const List = (props) => {

  const printPokemons = () => props.pokemons.map(pokemon => <Card pokemon={pokemon} add={() => props.add(pokemon)} delete={() => props.delete(pokemon)} searchList={props.searchList} key={uuidv4()} />)

  return <section>
    {printPokemons()}
  </section>;
};

export default List;


// import React from "react";
// import Card from './Card'
// import { v4 as uuidv4 } from 'uuid'

// const List = (props) => {

//   const printPokemons = () => props.pokemons.map(pokemon => <Card pokemon={pokemon} key={uuidv4()} />)

//   return <section>
//     {printPokemons()}
//   </section>;
// };

// export default List;
