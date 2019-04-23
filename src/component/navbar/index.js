import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logoutlinks from './logOutLinks';
import './index.css';

const NavBar = () => {
    return(
        <div className="TheNav">
        <Navbar className=" navbar navbar-light bg-light">
            <Link to='/' className="btn btn-outline-primary mr-auto">Home</Link>
            <Logoutlinks/>
        </Navbar>
        </div>
    )
};

export default NavBar