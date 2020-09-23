import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
    return(
    <Card key={dish.id} className="mt-5" onClick={() => onClick(dish)}>
        <CardImg src={dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
    </Card>
    );
}

const Menu = (props) => {
    const card = props.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
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