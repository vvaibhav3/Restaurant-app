import React from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';

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

function RenderComments({ comment }) {
    if (comment == null) {
        return (
            <div></div>
        );
    }
    else {
            return (
                <div className="col-12">
                <h4>Comments</h4>
                <ul key={comment.id} className="list-unstyled">
                    <p>{comment.comment}</p>
                    <p>--{comment.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
                </ul>
                </div>
        );
    }
}

const Dishdetail = (props) => {
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/menu'>
                        Menu
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                        {props.dish.name}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="row mt-5">
                <div className="col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col-md-5 m-1">
                    <RenderComments comment={props.comment} />
                </div>
            </div>
        </div>
    );
}

export default Dishdetail;