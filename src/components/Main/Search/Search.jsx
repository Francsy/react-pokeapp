import React, { useEffect, useState, useRef, useContext } from "react";
import List from './List'
import axios from 'axios'
import { pokemonsContext } from "../../../context/pokemonsContext";

const Search = () => {

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false) 
  const { pokemons, setNewPokemon } = useContext(pokemonsContext)
  // const [pokemons, setPokemons] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    setNotFound(false)
    let notFoundTimer;    
    async function getPokemon() {
      if (search !== '') {
        const lowCaseSearch = search.toLowerCase() //Para que la búsqueda siempre sea en minuscula
        if (!pokemons.find(pokemon => pokemon.name === lowCaseSearch)) {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowCaseSearch}`);
            const info = res.data;
            const abilities = info.abilities.map(ability => ability.ability.name);
            const moves = info.moves.map(move => move.move.name);
            const smallImg = [info.sprites.front_default, info.sprites.back_default ]
            const bigImg = [info.sprites.other.home.front_default, info.sprites.other['official-artwork'].front_default]
            const newPokemon = {
              id: info.id.toString(),
              name: info.name,
              image: info.sprites.other.dream_world.front_default,
              typeOne: info.types[0].type.name,
              typeTwo: info.types.length > 1 ? info.types[1].type.name : 'Not second type',
              abilities,
              moves,
              smallImg,
              bigImg
            }
            // setPokemons(currentPokemons => [newPokemon, ...currentPokemons])
            setNewPokemon(newPokemon)
          } catch (err) {
            setNotFound(true)
        
          }
        }
      }
    }
    const timer = setTimeout(getPokemon, 2500) // Otra opción: { debounce } from lodash (Library)
    notFoundTimer = setTimeout(() => setNotFound(false), 2000)
    return () => {
      clearTimeout(timer); // el useEffect retorna una función que se ejecuta cuando el search se actualiza, con eesto limpiamos el temporizador anteriormente creadoo para que no siga activo
      clearTimeout(notFoundTimer)
    }
  }, // eslint-disable-next-line 
    [search]);

    useEffect(() => {
      setSearch('')
    }, [pokemons])
  

  const handleInput = () => setSearch(inputRef.current.value);

  return <div>
    <input type="text" ref={inputRef} value={search} onChange={handleInput} />
    {notFound ? <p>That Pokemon doesn´t exist!</p> : null}
    <List pokemons={pokemons} />
  </div>;
};

export default Search;



// Version anterior:

/* import React, { useEffect, useState, useRef } from "react";
import List from './List'
import axios from 'axios'

const Main = () => {

  const [search, setSearch] = useState('');
  const [pokemons, setPokemon] = useState([])

  const inputRef = useRef();

  useEffect(()=>{
    setSearch('')
  }, [pokemons])

  const handleInput = () => setSearch(inputRef.current.value)
  
  const handleClick = async () => {
    if (search === '') {
      return
    } else {
      const lowCaseSearch = search.toLowerCase() //Para que la búsqueda siempre sea en minuscula
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowCaseSearch}`);
        const newPokemon = res.data;
        if (!pokemons.find(pokemon => pokemon.name.toLowerCase() === newPokemon.name.toLowerCase())) {
          setPokemon([newPokemon, ...pokemons])
        } else {
          alert('You already picked that one!')
        }
      } catch (err) {
        alert('That pokemon doesn´t exist!')
      }
    }
  }



  return <div>
    <input type="text" ref={inputRef} value={search} onChange={handleInput} />
    <button onClick={handleClick}>Search</button>
    <List pokemons={pokemons} />
  </div>;
};

export default Main;  */