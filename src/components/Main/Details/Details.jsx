import React from "react";
import { useParams, useLocation } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'

const Details = () => {

  const { id } = useParams()
  const { search } = useLocation()
  const params = new URLSearchParams(search)
  const name = params.get('name');
  const image = params.get('image')
  const typeOne = params.get('typeOne')
  const typeTwo = params.get('typeTwo')


  const stringOfAbilities = params.get('abilities')
  const stringOfMoves = params.get('moves')
  const stringOfSmallImages = params.get('smallImages')
  const stringOfBigImages = params.get('bigImages')
  const abilities = JSON.parse(stringOfAbilities)
  const moves = JSON.parse(stringOfMoves)
  const smallImages = JSON.parse(stringOfSmallImages)
  const bigImages = JSON.parse(stringOfBigImages)
  const weight = params.get('weight')
  const capName = name.charAt(0).toUpperCase() + name.slice(1)


  const printAbilities = () => abilities.map(ability => ability = ability.charAt(0).toUpperCase() + ability.slice(1)).join(', ')
  const printImages = (images) => images.map(image => <img key={uuidv4()} src={image} alt="" />)
  const printMoves = () => moves.map(move => {
    let moveToCap = move.charAt(0).toUpperCase() + move.slice(1)
    return <li key={uuidv4()} >{moveToCap}.</li>
  })

  return <section>
    <article>
      <img src={image} alt="Main img" />
      <h2>#{id}: {capName}</h2>
    </article>
    <article>
      <div>{printImages(smallImages)}</div>
      <p><strong>TYPE 1:</strong> {typeOne}</p>
      <p><strong>TYPE 2:</strong> {typeTwo}</p>
      <p><strong>WEIGHT:</strong> {weight}</p>
      <p><strong>Abilities:</strong> {printAbilities()}</p>
    </article>
    <article>
      <div>
        <p><strong>IMAGES:</strong></p>
        {printImages(bigImages)}
      </div>
      <div>
        <h3>Moves:</h3>
        <ul>
          {printMoves()}
        </ul>
      </div>
    </article>
  </section>;
};

export default Details;
