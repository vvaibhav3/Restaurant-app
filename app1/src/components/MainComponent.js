import React, { Component } from 'react';
import Menu from './MenuComponent';
// import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
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
                <Header />
                <Switch>
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/> } />
                    <Redirect to='/App' />
                </Switch>
                {/* <Menu dishes={this.state.dishes} onClick={(dish) => this.onDishSelect(dish)}/> */}
                {/* <Dishdetail dishDetails={this.state.selectedDish}/> */}
                <Footer />
            </div>
        );
    }
}

export default Main;
