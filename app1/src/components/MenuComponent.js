import React from 'react';
import { Card, CardImg, CardTitle, CardImgOverlay } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderMenuItem({ dish}) {
    return(
    <Card className="m-1">
        <Link to={`/menu/${dish.id}`}>
        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
        <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
        </Link>
    </Card>
    );
}

const Menu = (props) => {
    const card = props.dishes.dishes.map((dish) => {
        return (
            <div className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} />
            </div>
        );
    });

    if (props.dishes.isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return(
            <div className="container">
                <div className="row"> 
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else{
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