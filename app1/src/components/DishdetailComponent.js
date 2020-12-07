import React, { Component } from 'react';
import { Card, CardBody, CardText, CardImg, CardTitle,Breadcrumb,
    BreadcrumbItem,Button,Modal, ModalHeader, ModalBody,Row,Col, Label } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        
        this.state = {
            isModalOpen: false
        };

        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: ! this.state.isModalOpen
        });
    }

  
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    
    render(){
        return(
            <div>
            <Button outline className="primary m-1" onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Submit Comment</Button>
            <Modal toggle={this.toggleModal} isOpen={this.state.isModalOpen}>
            <ModalHeader toggle={this.toggleModal}>
                 Submit Comment
            </ModalHeader>
            <ModalBody>
                 <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                 <Row className="form-group">
                         <Col lg={12}>
                         <Label htmlFor="rating" >Rating</Label>
                         </Col>
                         <Col lg={12}>
                                 <Control.select model=".rating" name="rating"
                                     className="form-control">
                                     <option>1</option>
                                     <option>2</option>
                                     <option>3</option>
                                     <option>4</option>
                                     <option>5</option>
                                 </Control.select>
                         </Col>
                     </Row>

                     <Row className="form-group">
                         <Col lg={12}>
                         <Label htmlFor="author" >Your Name</Label>
                         </Col>
                         <Col lg={12}>
                             <Control.input model=".author"
                                 id="author"
                                 placeholder="Enter Name"
                                 name="author"
                                 className="form-control"
                                 validators={{
                                     required,
                                     minLength:minLength(2),
                                     maxLength:maxLength(15)
                                 }}/>
                                  <Errors 
                                     className="text-danger"
                                     model=".author"
                                     show="touched"

                                     messages={{
                                         required:"field is required ",
                                         minLength:"must be greater than 2 characters ",
                                         maxLength:"must be 15 characters or less"
                                     }
                                     }
                                     />
                         </Col>
                         </Row>
                         <Row className="form-group">
                             <Col lg={12}>
                             <Label htmlFor="comment" md={2}>Comment</Label>
                             </Col>
                             <Col md={12}>
                                 <Control.textarea model=".comment" id="comment" 
                                     name="comment"
                                     
                                     rows="6"
                                     className="form-control" />
                             </Col>
                         </Row>
                         <Row className="form-group">
                             <Col md={2}>
                                 <Button type="submit" color="primary">
                                     Submit
                                 </Button>
                             </Col>
                         </Row>
                 </LocalForm>
            </ModalBody>
         </Modal>
         </div>
        );
    }
}
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

function RenderComments({comment, addComment, dishId}) {
    if (comment == null) {
        return (
            <div></div>
        );
    }
    else {

            return (
                <div className="col-12">
                <h4>Comments</h4>
                <ul className="list-unstyled">
                {comment.map((com) =>{
                    return(
                        <li key={com.id}> 
                         <p>{com.comment}</p>
                         <p>--{com.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</p>
                        </li>
                    );
                })}

                </ul>
                <CommentForm dishId={dishId} addComment={addComment} />
                </div>
        );
    }
}

class Dishdetail extends Component {

    
    render(){
        
    return (
        <div className="container">
            <Breadcrumb>
                <BreadcrumbItem>
                    <Link to='/menu'>
                        Menu
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem active>
                        {this.props.dish.name}
                </BreadcrumbItem>
            </Breadcrumb>
            <div className="row mt-5">
                <div className="col-md-5 m-1">
                    <RenderDish dish={this.props.dish} />
                </div>
                <div className="col-md-5 m-1">
                    <RenderComments comment={this.props.comments} 
                     addComment={this.props.addComment}
                     dishId={this.props.dish.id}
                    />
                </div>
            </div>
        </div>
    );
    }
}

export default Dishdetail;