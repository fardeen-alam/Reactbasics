import { Button } from "bootstrap";
import React from "react";
import { NavLink } from "react-router-dom";
import Card from "./Card"

function View(props) {
    return (
        <div>
            <NavLink to="/admin">
            <button className="btn btn-success">Go back</button>
            </NavLink>
            {props.data.map((user) => (
                <Card id={user.id} name={user.name} cardnumber={user.cardNumber} date={user.date} cvv={user.cvv}/>
            ))}
        </div>
    );
}

export default View;
