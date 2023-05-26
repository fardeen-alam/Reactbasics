import React from "react";
import { Route, Routes } from "react-router-dom";
import Add from "./Add";
import Home from "./Home";
import './Body.css'
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import Admin from "./Admin";
import { EditUser } from "./EditUser";
import View from "./View";

function Body() {

    const [data, setData] = useState([]);

    const getData = async () => {
        var response = await axios.get("http://localhost:3001/employee");
        console.log(data);
    };

    useEffect(() => {
        axios
            .get("http://localhost:3001/employee")
            .then((response) => setData(response.data));
    }, [data]);

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="container">
            <Routes>
                <Route path="/home" element={<Home data={data}></Home>} />
                <Route path="/add" element={<Add data={data}></Add>} />
                <Route path="/admin" element={<Admin data={data}></Admin>} />
                <Route path="/edit" element={<EditUser data={data}></EditUser>} />
                <Route path="/view" element={<View data={data}></View>} />
            </Routes>
        </div>
    );
}

export default Body;
