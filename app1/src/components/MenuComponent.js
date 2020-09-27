import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
import {Link} from 'react-router-dom';

function RenderMenuItem({ dish}) {
    return(
    <Card className="m-1">
        <Link to={`/menu/${dish.id}`}>
        <CardImg src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card>
    );
}

const Menu = (props) => {
    const card = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                {card}
            </div>
        </div>
    );
}

export default Menu;