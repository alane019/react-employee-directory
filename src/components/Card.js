import React from "react";

function Card(props){

    return(
            <div className="card text-center">
                <div className="card-header">

                  <h2>{props.heading}</h2> 
                </div>
            </div>
    );

    /*     */
}

export default Card;