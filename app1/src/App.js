import React from 'react';
import './App.css';
import {Navbar, NavbarBrand,Button} from 'reactstrap';
import Menu from './components/MenuComponent';
import {DISHES} from './shared/dishes';

function App() {
  return (
    <div >
      <Navbar color="light" expand="md">
        <div className="container">
            <NavbarBrand href="/">FREE FOOD</NavbarBrand>
            <Button color="primary" outline size="sm">About</Button>
        </div>
      </Navbar>
      <Menu dishes={DISHES } />
    </div>
  );
}

export default App;
