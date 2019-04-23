import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Logoutlink = () => {

    return(
        <div className=" form-check-inline " >
            <NavItem inverse fluid><NavLink to='/signin' className="btn btn-outline-primary mr-2">signin</NavLink></NavItem>
            <NavItem><NavLink to='/signup' className="btn btn-outline-primary  ">signup</NavLink></NavItem>
        </div>
    )
};

export default Logoutlink