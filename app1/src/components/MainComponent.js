import React, { Component } from 'react';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props){
        super(props);

        this.state={
            dishes:DISHES,
            selectedDish:null
        }
    }


    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    render() {
        return (
            <div >
                <Navbar dark color="primary" expand="lg">
                    <div className="container">
                        <NavbarBrand href="/">FREE FOOD</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/>
                <Dishdetail dishDetails={this.state.selectedDish}/>
            </div>
        );
    }
}

export default Main;
