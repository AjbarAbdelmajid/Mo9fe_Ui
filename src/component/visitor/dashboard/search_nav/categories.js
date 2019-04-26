import React, { Component } from 'react';
import {connect} from 'react-redux'
import {fetchCategories} from "../../../../store/action/categoryAction";
import './index.css';
import { Navbar, Form } from 'react-bootstrap';

class CategoriesList extends Component {

    componentDidMount() {
        this.props.dispatch(fetchCategories());
    }

    render() {
        const {categoriesError, categoriesLoading, categories} = this.props;

        if (categoriesLoading && categories.length === 0) {

            return (
                <Navbar.Brand className="brandItems">
                    <Form.Control as="select" className="SearchItems">
                        <option hidden key='categories'>Loading...</option>
                    </Form.Control>
                </Navbar.Brand>
            )
        }
        if (categoriesError) {
            return (
                <Navbar.Brand className="brandItems">
                    <Form.Control as="select" className="SearchItems">
                        <option hidden key='categories'>network error</option>
                        {setTimeout(() => {
                            alert('Oops there is a problem connecting with server  try after a minute')
                        }, 1000)}
                    </Form.Control>

                </Navbar.Brand>
            )
        }
        if( categories.length) {
            console.log('sfsdf',categories);
            return (
                <Navbar.Brand className="brandItems">
                    <Form.Control as="select" className="SearchItems">
                        <option hidden key='categories'>categories</option>
                        <option value=''> </option>
                        {categories.map(item => <option key={item.categories_id}>{item.categories_name}</option>)}

                    </Form.Control>

                </Navbar.Brand>
            )
        }
        return (
            <Navbar.Brand className="brandItems">
                <Form.Control as="select" className="SearchItems">
                    <option hidden key='categories'>Loading...</option>
                </Form.Control>
            </Navbar.Brand>
        )
    }
}

const mapCategoryStateToProps = (state) => {

    return {
        categories: state.category.items,
        categoriesLoading: state.category.loading,
        categoryError: state.category.error
    }
};

export default connect(mapCategoryStateToProps)(CategoriesList)