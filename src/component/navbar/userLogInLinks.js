import React from 'react';
import { NavLink, Redirect} from 'react-router-dom';
import { NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from "../../api_calls/users";

const userSignInLink = () => {

    return(
        <div className=" form-check-inline " >
            <Redirect push to="/"/>
            <NavItem><NavLink to='/' className="btn btn-outline-primary " onClick={()=>{logout()}}>logout</NavLink></NavItem>
        </div>
    )
};

export default userSignInLink