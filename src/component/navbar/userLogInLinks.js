import React from 'react';
import { Link, Redirect} from 'react-router-dom';
import { Dropdown, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {logout} from "../../api_calls/users";
import DeleteAccount from '../user/account/deleteAccount'

const userSignInLink = () => {

    return(
        <div className=" form-check-inline items" >


            <Link to='..' style={{ textDecoration: 'none' }} className="navBtn mr-1 ml-5  bg-light" > <b>offer de service</b></Link>

            <NavDropdown className="navBtn mr-1 ml-5  bg-light " title={<b>mais demandes</b>} >
                    <Dropdown.Item style={{ textDecoration: 'none' }} className="btn navBtn text-info" >
                        <b>creer une demande</b>
                    </Dropdown.Item>

                    <Dropdown.Item style={{ textDecoration: 'none' }} className="btn navBtn text-info" >
                        <b>mais demandes</b>
                    </Dropdown.Item>
            </NavDropdown>

            <NavDropdown className="navBtn mr-5 ml-5  bg-light " title={<b>account</b>} >

                <Dropdown.Item style={{ textDecoration: 'none' }} className="btn navBtn text-info" >
                     <b>update account</b>
                </Dropdown.Item>

                <Dropdown.Item style={{ textDecoration: 'none' }} className="btn navBtn text-info" onClick={()=> <DeleteAccount/>} >
                    <DeleteAccount/>
                </Dropdown.Item>

                <NavDropdown.Divider />

                <Dropdown.Item style={{ textDecoration: 'none' }} onClick={()=>{logout(); return <Redirect push to="/"/>}} className="btn navBtn text-info">
                    <b>logout</b>
                </Dropdown.Item>
            </NavDropdown>


        </div>
    )
};

export default userSignInLink