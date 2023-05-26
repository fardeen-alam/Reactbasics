import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";

const baseurl = "http://localhost:3001/PaymentDetails";

function Home(props) {


    return (
        <div className="table-container">
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Card Number</th>
                        <th scope="col">Expiry Date</th>
                        <th scope="col">CVV</th>

                    </tr>
                </thead>
                <tbody>
                {props.data.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.cardNumber}</td>
                            <td>{user.date}</td>
                            <td>{user.cvv}</td>
                            {/* <td>
                              <div className="btn-container">
                                <button className="table-edit-btn">Edit</button>
                                <button className="table-del-btn">Delete</button>
                                <button className="table-view-btn">View</button>
                              </div>
                            </td> */}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="add-button">
              <Link to="/add">
                <button>Add</button>
              </Link>
                
            </div>
        </div>
    );
}

export default Home;
