import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import "./Admin.css";

function Admin(props) {
    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/employee/${id}`);
    };

    return (
        <div className="admin-container">
            <table class="table table-dark w-50">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map((user) => (
                        <tr>
                            <td>{user.id}</td>
                            {/* <td>
                              <div className="btn-container">
                                <button className="table-edit-btn">Edit</button>
                                <button className="table-del-btn">Delete</button>
                                <button className="table-view-btn">View</button>
                              </div>
                            </td> */}
                            <td className="btn-container">
                                <NavLink to="/edit">
                                    <button className="btn btn-success">
                                        Edit
                                    </button>
                                </NavLink>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDelete(user.id)}
                                >
                                    Delete
                                </button>

                                <NavLink to="/view">
                                    <button className="btn btn-info">
                                        View
                                    </button>
                                </NavLink>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Admin;
