import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link, NavLink } from "react-router-dom";
import HomeNav from "./Components/HomeNav";
import Body from "./Components/Body";

const baseurl = "http://localhost:3001/PaymentDetails";

function App() {


    return (
        <div>
          <HomeNav />
          <Body />
        </div>
    );
}

export default App;
