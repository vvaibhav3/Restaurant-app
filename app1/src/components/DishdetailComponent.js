import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

class Dishdetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dish: null
        }
    }

    renderDish(dish) {
        return (
            <Card key={dish.id}>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(dish) {

        const comment = dish.comments.map((item) => {

            return (
                <ul key={item.id} className="list-unstyled">
                    <p>{item.comment}</p>
                    <p>--{item.author},{item.date}</p>
                </ul>
            );
        });
        return (
            <div className="col-12">
                <h4>Comments</h4>
                {comment}
            </div>
        );
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-5 m-2">
                    {this.renderDish(this.props.dishDetails)}
                </div>
                <div className="col-md-5 m-2">
                    {this.renderComments(this.props.dishDetails)}
                </div>
            </div>
        );
    }
}

export default Dishdetail;