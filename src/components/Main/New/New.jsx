import React, { useContext, useState, useEffect } from "react";
import { pokemonsContext } from "../../../context/pokemonsContext";
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

const New = () => {
  const { pokemons, setNewPokemon } = useContext(pokemonsContext)
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [success, setSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setSuccess(false);
    }, 2900);
    return () => clearTimeout(timer);
  }, [pokemons]);

  const handeRepeatedPokemon = () => {
    setErrorMessage(true)
    setTimeout(() => setErrorMessage(false), 3000);
  }

  const onSubmit = data => {
    const newPokemon = {
      ...data,
      id: '0' + data.id, // Añado 0 delante para diferenciarlo de los ids de la api
      name: data.name.toLowerCase(),
      typeTwo: data.typeTwo !== '' ? data.typeTwo : 'Not second type',
      abilities: ['Not available'],
      moves: ['Not available'],
      smallImages: ['/assets/small-pokemon.png'],
      bigImages: ['/assets/secret-pokemon.png'],
      weight: 'Not available'
    }
    if (!pokemons.some(pokemon => pokemon.name === newPokemon.name || pokemon.id === newPokemon.id)) {
      setNewPokemon(newPokemon)
      setSuccess(true)
    } else {
      handeRepeatedPokemon()
    }
  }

  return (
    <section className="new">
      {success ? <article>
        <img className="pokemon-created-img" src="/assets/pokemon-created.gif" alt="Pokemon created" />
        <Alert variant='dark'>
          You added a new Pokemon!
        </Alert>
        <img className="professor-oak-img" src="/assets/oak-transparent.png" alt="" />
      </article>
        :
        <>
          <h1>Create your own Pokemon!</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            {errors.id && <span className="error-message">Must be greater than 0:</span>}
            <input type="number" placeholder="ID*" {...register("id", { required: true, min: 0 })} className={errors.id ? "error-input" : ""} />
            {errors.name && <span className="error-message">Required and should have more than 3 characters:</span>}
            <input type="text" placeholder="Name*" {...register("name", { required: true, minLength: 3 })} className={errors.name ? "error-input" : ""} />
            {errors.image && <span className="error-message">Required:</span>}
            <input type="url" placeholder="Image url*" {...register("image", { required: true })} className={errors.image ? "error-input" : ""} />
            {errors.typeOne && <span className="error-message">First type is required:</span>}
            <select {...register("typeOne", { required: true })} className={errors.typeOne ? "error-input" : ""} defaultValue="" >
              <option value="" disabled>First Type</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="Fairy">Fairy</option>
              <option value="Unknown">Unknown</option>
              <option value="Developer">Developer</option>
            </select>
            <select {...register("typeTwo")} defaultValue="">
              <option value="" disabled >Second Type</option>
              <option value="normal">Normal</option>
              <option value="fighting">Fighting</option>
              <option value="flying">Flying</option>
              <option value="poison">Poison</option>
              <option value="ground">Ground</option>
              <option value="bug">Bug</option>
              <option value="ghost">Ghost</option>
              <option value="fire">Fire</option>
              <option value="water">Water</option>
              <option value="grass">Grass</option>
              <option value="electric">Electric</option>
              <option value="psychic">Psychic</option>
              <option value="ice">Ice</option>
              <option value="dragon">Dragon</option>
              <option value="dark">Dark</option>
              <option value="Fairy">Fairy</option>
              <option value="Unknown">Unknown</option>
              <option value="Developer">Developer</option>
            </select>
            <Button type="submit" className="home-right-button" size='lg' variant="dark">Create!</Button>
            {errorMessage ?
              <Alert variant='dark'>
                Your new Pokemon is already on the list!
              </Alert> : <></>}
            <img className="professor-oak-img" src="/assets/oak-transparent.png" alt="" />
          </form>
        </>}
    </section>
  );
};

export default New;