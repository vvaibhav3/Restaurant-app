import React from 'react';
import './App.css';
import {Navbar, NavbarBrand,Button} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

function App() {
  return (
    <div >
      <Navbar dark color="primary"expand="lg">
        <div className="container">
            <NavbarBrand href="/">FREE FOOD</NavbarBrand>
        </div>
      </Navbar>
      <Menu dishes={DISHES } />
    </div>
  );
}

export default App;
