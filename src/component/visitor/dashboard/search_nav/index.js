import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form } from 'react-bootstrap';
import './index.css';

class Searching extends Component {

    render() {
        return (
            <div className="container-fluid pt-5 ">
                <Navbar className="searchNav">

                    {this.dropDownGenerator('city', ['sdfjs', 'wxdlqkd'])}
                    {this.dropDownGenerator('category', ['sdfjs', 'wxdlqkd'])}
                    {this.dropDownGenerator('look for', ['sdfjs', 'wxdlqkd'])}

                    <Navbar.Brand className="brandItems">
                        <Button variant="outline-info" className="SearchBtn" type="submit">Submit</Button>
                    </Navbar.Brand>

                </Navbar>
            </div>
        )
    }
    dropDownGenerator = (title, items)=>{
        return (
            <Navbar.Brand className="brandItems">
                <Form.Control as="select" className="SearchItems">
                    <option hidden>{title}</option>
                    <option> </option>
                    {items.map(item => {return( <option>{item}</option>)})}

                </Form.Control>

            </Navbar.Brand>
        )
    };

}


export default Searching;
