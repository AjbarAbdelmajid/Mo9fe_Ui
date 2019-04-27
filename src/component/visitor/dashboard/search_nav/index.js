import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form } from 'react-bootstrap';
import './index.css';
import CitiesList from './cities'
import CategoriesList from './categories'

class Searching extends Component {

        render() {
            return (
                <div className="container-fluid pt-5 ">
                    <Navbar className="searchNav">

                        <CitiesList/>
                        <CategoriesList/>
                        <Navbar.Brand className="brandItems">
                            <Form.Control as="select" className="SearchItems">
                                <option hidden key='service'>type service</option>
                                <option key='announce'>demand service</option>
                                <option key='profile'>offer service</option>
                            </Form.Control>
                        </Navbar.Brand>

                        <Navbar.Brand className="brandItems">
                            <Button variant="outline-info" className="SearchBtn" type="submit">Submit</Button>
                        </Navbar.Brand>

                    </Navbar>
                </div>
            )
        }

}


export default Searching;
