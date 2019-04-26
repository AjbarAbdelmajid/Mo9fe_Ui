import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCities} from "../../../../store/action/cityAction"
import './index.css';
import { Navbar, Form } from 'react-bootstrap';

class CitiesList extends Component {

    componentWillMount(){
        this.props.dispatch(fetchCities()).then(()=>{
            console.log('all done ');
        });
    }

    render(){
        const {error, loading, cities} = this.props;

        if (loading || cities.length ===0 ){
            this.loaderHandlerComponent('cities')
        }
        if (error){
            this.errorHandlerComponent('cities')
        } else {
            return (
                <Navbar.Brand className="brandItems">
                    <Form.Control as="select" className="SearchItems">
                        <option hidden key='cities'>cities</option>
                        <option value=''> </option>
                        {cities.map(item => {return( <option key={item.code_postal}>{item.city_name}</option>)})}

                    </Form.Control>

                </Navbar.Brand>
            )
        }
    }

    loaderHandlerComponent = (section)=>{
        return (
            <Navbar.Brand className="brandItems">
                <Form.Control as="select" className="SearchItems">
                    <option hidden key={section}>Loading...</option>
                </Form.Control>
            </Navbar.Brand>
        )
    };
    errorHandlerComponent = (section)=>{
        return(
            <Navbar.Brand className="brandItems">
                <Form.Control as="select" className="SearchItems">
                    <option hidden key={section}>network error</option>
                    {setTimeout(()=>{
                        alert('Oops there is a problem connecting with server  try after a minute')
                    },1000)}
                </Form.Control>
            </Navbar.Brand>
        )
    };
}


const mapStateToProps = (state) =>{
    return {
        cities: state.city.items,
        loading: state.city.loading,
        error: state.city.error,
    }
};


export default connect(mapStateToProps)(CitiesList)