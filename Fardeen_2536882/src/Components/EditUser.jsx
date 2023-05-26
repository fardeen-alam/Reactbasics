import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { NavLink } from "react-router-dom";

export const EditUser = () => {
    const [id, setID] = useState();
    const [name, setName] = useState();
    const [cardnumber, setcardnumber] = useState();
    const [date, setDate] = useState();
    const [cvv, setCvv] = useState();

    const handleID = (e) => {
        setID(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handleNumber = (e) => {
        setcardnumber(e.target.value);
    };
    const handleDate = (e) => {
        setDate(e.target.value);
    };
    const handleCvv = (e) => {
        setCvv(e.target.value);
    };

    // Regex Validation
    const nameRegex = /^[a-zA-Z ]{2,30}$/;
    const cardRegex = /^[0-9]{16}$/;
    const cvvRegex = /^[0-9]{3}$/;
    const dateRegex = /^[0-9]{2}\/[0-9]{2}$/;

    // Form Submit
    const postData = (e) => {
        e.preventDefault();
        // name validation
        if (name === "") {
            alert("Please Enter Card Owner Name");
            return false;
        } else if (!nameRegex.test(name)) {
            alert("Please Enter Valid Card Owner Name");
            return false;
        }

        // email validation
        if (cardnumber === "") {
            alert("Please Enter Card Number");
            return false;
        } else if (!cardRegex.test(cardnumber)) {
            alert("Please Enter Valid Card Number");
            return false;
        }

        // security code validation
        if (cvv === "") {
            alert("Please Enter Security Code");
            return false;
        } else if (!cvvRegex.test(cvv)) {
            alert("Please Enter Valid Security Code");
            return false;
        }

        // date validation
        if (date === "") {
            alert("Please Enter Expiration Date");
            return false;
        } else if (!dateRegex.test(date)) {
            alert("Please Enter Valid Expiration Date");
            return false;
        }

        axios.put(`http://localhost:3001/employee/${id}`, {
            id: id,
            name: name,
            cardNumber: cardnumber,
            date: date,
            cvv: cvv,
        });
        //navigate("/");
    };
    return (
        <div>
            <form onSubmit={(e) => postData(e)}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        ID
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        onChange={handleID}
                        
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={handleName}
                        
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Card Number
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={handleNumber}
                        
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        Expiry Date
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={handleDate}
                        
                    />
                </div>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">
                        CVV
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="exampleInputEmail1"
                        onChange={handleCvv}
                        
                    />
                </div>

                <NavLink to="/admin">
                    <button className="btn btn-primary" onClick={postData}>
                        Submit
                    </button>
                </NavLink>
            </form>
        </div>
    );
};
