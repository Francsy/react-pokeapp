import React, { useEffect, useState, useRef } from "react";
import List from './List'
import axios from 'axios'

const Search = () => {
  const [input, setInput] = useState('');
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    async function getPokemon() {
      if (search !== '') {
        try {
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search}`);
          const newPokemon = res.data;
          if (!pokemons.find(pokemon => pokemon.name === newPokemon.name)) {
            setPokemons(pokemonsData => [newPokemon, ...pokemonsData])
          } else {
            alert('You already picked that one!')
          }
        } catch (err) {
          alert('That pokemon doesn´t exist!')
        }
      }
    }
    getPokemon()
  }, // eslint-disable-next-line 
  [search]);

 
  useEffect(()=>{
    setInput('')
  }, [pokemons])

  const handleInput = () => setInput(inputRef.current.value);

  const handleClick = () => {
    if (input === '') {
      return
    } else {
      const lowCaseInput = input.toLowerCase() //Para que la búsqueda siempre sea en minuscula
      lowCaseInput !== search ? setSearch(lowCaseInput) : alert('You already try that search')
    }
  }

  return <div>
    <input type="text" ref={inputRef} value={input} onChange={handleInput} />
    <button onClick={handleClick}>Search</button>
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