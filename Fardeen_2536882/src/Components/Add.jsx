import React from "react";
import { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

function Add(props) {
    var [data, setData] = useState({
        id: "",
        name: "",
        cardNumber: "",
        date: "",
        cvv: "",
    });

    const onChangeHandler = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };



    const postData = () => {

        axios
            .post("http://localhost:3001/employee", data)
            .catch((error) => console.log(error));
    };

    return (
        <div>
            <form onSubmit={postData}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        ID
                    </label>
                    <input
                        name="userid"
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        name="name"
                        type="text"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Card Number
                    </label>
                    <input
                        name="cardNumber"
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Expiry Date
                    </label>
                    <input
                        name="date"
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp"
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        CVV
                    </label>
                    <input
                        name="cvv"
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={onChangeHandler}
                        aria-describedby="emailHelp"
                    />
                </div>

                <NavLink to="/home">
                    <button className="btn btn-primary" onClick={postData}>
                        Submit
                    </button>
                </NavLink>
            </form>
        </div>
    );
}

export default Add;
