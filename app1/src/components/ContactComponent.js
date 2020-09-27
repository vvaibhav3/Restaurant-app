import React from 'react';

function Contact(props) {
    return(
        <div className="container">
            <div className="row row-content">
                <div className="col-12">
                <h3>Location Information</h3>
                </div>
                <div className="col-12 col-sm-4 m-2">
                        <h5>Our Address</h5>
                        <address>
                        11/13 , Tulip Homes ,<br />
                        Near Trimurti Chawk , Pune<br />
                        Maharashtra , India<br />
                        <i className="fa fa-phone"></i>: +852 1234 5678<br />
                        <i className="fa fa-fax"></i>: +852 8765 4321<br />
                        <i className="fa fa-envelope"></i>: <a href="mailto:free@food.net">free@food.net</a>
                        </address>
                </div>
                <div className="col-12 col-sm-6 offset-sm-1">
                    <h5>Map of our Location</h5>
                </div>
                <div className="col-12 col-sm-11 m-2">
                    <div className="btn-group" role="group">
                        <a role="button" className="btn btn-primary" href="#"><i className="fa fa-phone"></i> Call</a>
                        <a role="button" className="btn btn-info" href="#"><i className="fa fa-skype"></i> Skype</a>
                        <a role="button" className="btn btn-success" href="#"><i className="fa fa-envelope-o"></i> Email</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;