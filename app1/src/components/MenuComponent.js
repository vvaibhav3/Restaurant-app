import React, { Component } from 'react';
import {Card,CardBody,CardText,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish:null
        };
    }

    onDishSelect(dish){
        this.setState({selectedDish: dish});
    }

    renderDish(dish){
        if(dish != null){
        return(
            <Card>
            <CardImg src={dish.image} alt={dish.name}/>
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
            </Card>
        );
        }
        else{
            return(
                <div></div>
            );
            
        }
    }

    render() {
        const card = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} className="mt-5" onClick={() => this.onDishSelect(dish)}>
                    <CardImg src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
                </div>
            );
        }
        );
        return (
            <div className="container">
                <div className="row">
                {card}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
            </div>
        );
    }
}

export default Menu;