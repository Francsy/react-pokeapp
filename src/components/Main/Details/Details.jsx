import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'
import ListGroup from 'react-bootstrap/ListGroup';
import { ListGroupItem } from "react-bootstrap";
import Button from 'react-bootstrap/Button';


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

  const navigate = useNavigate()
  const capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
  const printAbilities = () => abilities.map(ability => <ListGroup.Item key={uuidv4()} >{capitalize(ability)}.</ListGroup.Item>)
  const printImages = (images, sizeClass) => images.map(image => <ListGroup.Item key={uuidv4()}><img className={sizeClass} src={image} alt="" /></ListGroup.Item>)
  const printMoves = () => moves.map(move => <ListGroup.Item key={uuidv4()} >{capitalize(move)}.</ListGroup.Item>)
  const goBack = () => navigate(-1)

  return <section className="details">
    <div className="container-title">
      <Button variant="dark" size="lg" onClick={goBack}>&lt; Back</Button>
      <h1>#{id}: {capitalize(name)}</h1>
    </div>
    <img className="details-img" src={image} alt="" />
    <div className="details-main-container">
      <article>
        <ListGroup>
          <ListGroupItem key={uuidv4()} ><strong>NUMBER:</strong></ListGroupItem>
          <ListGroupItem key={uuidv4()}>{id}</ListGroupItem>
          <ListGroupItem key={uuidv4()}><strong>NAME:</strong></ListGroupItem>
          <ListGroupItem key={uuidv4()}>{capitalize(name)}</ListGroupItem>
          <ListGroupItem key={uuidv4()}><strong>TYPE 1:</strong></ListGroupItem>
          <ListGroupItem key={uuidv4()}>{capitalize(typeOne)}</ListGroupItem>
          <ListGroupItem key={uuidv4()}><strong>TYPE 2:</strong></ListGroupItem>
          <ListGroupItem key={uuidv4()}>{capitalize(typeTwo)}</ListGroupItem>
          <ListGroupItem key={uuidv4()}><strong>WEIGHT:</strong></ListGroupItem>
          <ListGroupItem key={uuidv4()}>{weight}</ListGroupItem>
          <ListGroupItem key={uuidv4()}><strong>ABILITIES:</strong></ListGroupItem>
          {printAbilities()}
        </ ListGroup>
      </article>
      <article>
        <ListGroup>
          <ListGroupItem key={uuidv4()}><strong>SMALL IMAGES:</strong></ListGroupItem>
          {printImages(smallImages, 'details-small')}
          <ListGroupItem key={uuidv4()}><strong>LARGE IMAGES:</strong></ListGroupItem>
          {printImages(bigImages, 'details-large')}
        </ListGroup>
      </article>
      <article>
        <ListGroup>
          <ListGroup.Item key={uuidv4()}><strong>MOVES:</strong></ListGroup.Item>
          {printMoves()}
        </ListGroup>
      </article>
    </div>
  </section>
};

export default Details;