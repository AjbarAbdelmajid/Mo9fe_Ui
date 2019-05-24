import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Logoutlink = () => {

    return(
        <div className=" form-check-inline " >
            <NavItem inverse="true" fluid ="true"><Link to='/signin' className="btn btn-outline-info mr-2 navBtn "><b>signin</b></Link></NavItem>
            <NavItem><Link to='/signup' className="btn btn-outline-info navBtn "><b>signup</b></Link></NavItem>
        </div>
    )
};

export default Logoutlink