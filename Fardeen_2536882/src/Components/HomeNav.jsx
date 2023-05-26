import React from "react";
import { NavLink } from "react-router-dom";
import './HomeNav.css'

function HomeNav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    Bank Management
                </a>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <NavLink to="/home" className='home-link'>
                            Home
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/admin" className='admin-link'>
                            ADmin
                            </NavLink>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link disabled"
                                href="#"
                                tabindex="-1"
                                aria-disabled="true"
                            >
                                Disabled
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default HomeNav;
