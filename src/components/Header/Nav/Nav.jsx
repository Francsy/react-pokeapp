import React from "react";
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const BTNav = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand><img src="assets/minimal-pokeball.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Pokeball logo"
            /><span style={{ marginLeft: "10px" }}>Poke-App</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/new">Create Pokemons!</NavLink>
            <NavLink className="nav-link" to="/search">Get them all!</NavLink>
          </Nav>
          <Nav>
          <NavLink className="nav-link" to="/"><img src="./assets/pokemon-title-nav.png" width="140"
              height="44"
              className="d-inline-block align-top"
              alt="Pokemon title logo" /></NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BTNav;


// const Nav = () => {
//   return <nav>
//     <Link to="/">Home</Link>
//     <br />
//     <Link to="/new">Create Pokemon</Link>
//     <br />
//     <Link to="/search">Search</Link>
//   </nav>;
// };

// export default Nav;




/* import React from "react";
import { Link } from 'react-router-dom'

const Nav = () => {
  return <nav>
    <Link to="/">Home</Link>
    <br />
    <Link to="/new">Create Pokemon</Link>
    <br />
    <Link to="/search">Search</Link>
  </nav>;
};

export default Nav;
 */