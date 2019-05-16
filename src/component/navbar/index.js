import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logoutlinks from './logOutLinks';
import UserLogInLinks from './userLogInLinks';
import './index.css';
import {connect} from 'react-redux';

class NavBar extends React.Component {
    render(){
        return(
            <div className="TheNav">
                <Navbar className=" navbar navbar-light bg-light">
                    <Link to='/' className="btn btn-outline-primary mr-auto">Home</Link>
                    {this.props.loggedIn !== null ? <UserLogInLinks/>: <Logoutlinks/>}
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return {
        loggedIn : state.users.loggedUser
    }
};

export default connect(mapStateToProps)(NavBar)