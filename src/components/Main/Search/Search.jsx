import React, { useEffect, useState, useRef, useContext } from "react";
import List from './List'
import axios from 'axios'
import { pokemonsContext } from "../../../context/pokemonsContext";
import Alert from 'react-bootstrap/Alert';

import specialAudio from '../../../styles/assets/missing0.mp3'
import encounter from '../../../styles/assets/encounter.mp3'
import ghost from '../../../styles/assets/ghost.mp3'
import superPika from '../../../styles/assets/superpika.mp3'
import pika from '../../../styles/assets/pika.mp3'




const Search = () => {

  const { pokemons, setNewPokemon, deletePokemon } = useContext(pokemonsContext)

  const [search, setSearch] = useState('');
  const [notFound, setNotFound] = useState(false)
  const [searchList, setSearchList] = useState([]);

  const inputRef = useRef();

  useEffect(() => {
    setNotFound(false)
    let notFoundTimer;
    async function getPokemon() {
      if (search !== '') {
        const lowCaseSearch = search.toLowerCase() //Para que la búsqueda siempre sea en minuscula
        if (!searchList.find(pokemon => pokemon.name === lowCaseSearch)) {
          try {
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${lowCaseSearch}`);
            const info = res.data;
            const abilities = info.abilities.map(ability => ability.ability.name);
            const moves = info.moves.map(move => move.move.name);
            const smallImages = [info.sprites.front_default, info.sprites.back_default]
            const bigImages = [info.sprites.other.home.front_default, info.sprites.other['official-artwork'].front_default]
            const newPokemon = {
              id: info.id.toString(),
              name: info.name,
              image: info.sprites.other.dream_world.front_default,
              typeOne: info.types[0].type.name,
              typeTwo: info.types.length > 1 ? info.types[1].type.name : 'Not second type',
              abilities,
              moves,
              smallImages,
              bigImages,
              weight: info.weight
            }
            let encounterMusic;
            if (newPokemon.typeOne === 'ghost') {
              encounterMusic = new Audio(ghost)
            } else if (newPokemon.name === 'pikachu') {
              const random = Math.random();
              if (random < 0.5) {
                encounterMusic = new Audio(pika)
              } else {
                encounterMusic = new Audio(superPika)
              }

              
            } else {
              encounterMusic = new Audio(encounter)
            }
            encounterMusic.play();
            setSearchList(currentPokemons => [newPokemon, ...currentPokemons])

          } catch (err) {
            if (lowCaseSearch.includes('missingno')) {
              const easterEgg = new Audio(specialAudio)
              easterEgg.play()
            }
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
  }, [searchList])




  const handleInput = () => setSearch(inputRef.current.value);

  const addToMain = (newPokemon) => {
    if (!pokemons.find(pokemon => pokemon.name === newPokemon.name)) {
      setNewPokemon(newPokemon)
    } else {
      alert('You already added that Pokemon to your list!!')
    }
  }


  return <section className="search">
    <h1 className="title-get-all">Gotta catch 'em all!</h1>
    <div className="searcher-div">
      <input type="text" placeholder="Search pokemons!" ref={inputRef} value={search} onChange={handleInput} />
      {notFound ? <Alert variant='dark'>
        That Pokemon doesn´t exist!
      </Alert> : null}
      <List pokemons={searchList} add={addToMain} delete={deletePokemon} />
      <img className="search-pokemons-transparent" src="/assets/pokemons-transparent.png" alt="Some pokemons together" />
    </div>
  </section>;
};

export default Search;