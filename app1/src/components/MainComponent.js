import React, { Component } from 'react';
import Menu from './MenuComponent';
import Dishdetail from './DishdetailComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';

const mapDispatchToProps = dispatch => ({
  
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
  
  });

const mapStateToProps = state => {
    return {
      dishes: state.dishes,
      comments: state.comments,
      promotions: state.promotions,
      leaders: state.leaders
    }
  }

class Main extends Component {

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    render() {

        const DishWithId=({match}) => {
             return(
                <Dishdetail 
                    dish={this.props.dishes.filter( (dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                    comments={this.props.comments.filter( (comment) => comment.dishId === parseInt(match.params.dishId,10))}
                    addComment={this.props.addComment}
                    />
             );   
        }
        const Homepage = () => {
            return (
                <Home 
                    dish={this.props.dishes.filter( (dish) => dish.featured)[0]}
                    leader={this.props.leaders.filter( (leader) => leader.featured)[0]}
                    promotion={this.props.promotions.filter( (promo) => promo.featured)[0]}
                />
            );
        }
        return (
            <div >
                <Header />
                <Switch>
                    <Route path='/home' component={Homepage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId}/>
                    <Route exact path='/contactus' component={Contact} />
                    <Route exact path='/about' component={() => <About leaders={this.props.leaders}/>} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
