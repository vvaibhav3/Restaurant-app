import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dishes: DISHES,
            comments:COMMENTS,
            promotions:PROMOTIONS,
            leaders:LEADERS,
            selectedDish: null
        }
    }


    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }



    render() {

        const DishWithId=({match}) => {
             return(
                <Dishdetail 
                    dish={this.state.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comment={this.state.comments.filter( (comment) => comment.id === parseInt(match.params.dishId,10))[0]}
                />
             );   
        }
        const Homepage = () => {
            return (
                <Home 
                    dish={this.state.dishes.filter( (dish) => dish.featured)[0]}
                    leader={this.state.leaders.filter( (leader) => leader.featured)[0]}
                    promotion={this.state.promotions.filter( (promo) => promo.featured)[0]}
                />
            );
        }
        return (
            <div >
                <Header />
                <Switch>
                    <Route path='/home' component={Homepage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/about' component={() => <About leaders={this.state.leaders}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}

export default Main;
