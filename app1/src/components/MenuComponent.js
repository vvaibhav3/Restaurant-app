import React, { Component } from 'react';
import {Card,CardImg, CardTitle, CardImgOverlay} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedDish:null
        };
    }


    render() {
        const card = this.props.dishes.map((dish) => {
            return (
                <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} className="mt-5" onClick={() => this.props.onClick(dish)}>
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
            </div>
        );
    }
}

export default Menu;