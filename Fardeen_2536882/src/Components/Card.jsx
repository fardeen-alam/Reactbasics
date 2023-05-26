import React from "react";

function Card(props) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{props.id}</h5>
                <h5 class="card-subtitle mb-2 text-body-secondary">
                    {props.name}
                </h5>
                <p class="card-text">
                    Card Number : {props.cardnumber}
                </p>
                <p class="card-text">
                    Expiry Date : {props.date}
                </p>
                <p class="card-text">
                    CVV : {props.cvv}
                </p>
            </div>
        </div>
    );
}

export default Card;
