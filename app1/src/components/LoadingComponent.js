import React from 'react';

export const Loading = () => {
    return(
        <div className="col-12 mt-5">
            <center>
            <span className="fa fa-circle-o-notch fa-spin fa-2x fa-fw"></span>
            <p>Loading . . .</p>
            </center>
        </div>
    );
};