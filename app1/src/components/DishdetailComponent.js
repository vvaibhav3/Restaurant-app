import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
    if (dish != null) {
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
    else {
        return (
            <div></div>
        );
    }
}

function RenderComments({ dish }) {
    if (dish == null) {
        return (
            <div></div>
        );
    }
    else {
        const comment = dish.comments.map((item) => {
            return (
                <ul key={item.id} className="list-unstyled">
                    <p>{item.comment}</p>
                    <p>--{item.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(item.date)))}</p>
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
}

const Dishdetail = (props) => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-5 m-1">
                    <RenderDish dish={props.dishDetails} />
                </div>
                <div className="col-md-5 m-1">
                    <RenderComments dish={props.dishDetails} />
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;