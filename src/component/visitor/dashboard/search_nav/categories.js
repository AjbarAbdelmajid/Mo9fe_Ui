import React, { Component } from 'react';
import {connect} from 'react-redux'
import { storeSelectedCategory} from "../../../../store/action/categoryAction";
import {getCategories} from "../../../../api_calls/category";
import './index.css';
import { Navbar, Form } from 'react-bootstrap';

class CategoriesList extends Component {

    componentWillMount() {
        this.props.getCategories();
    }

    render() {
        const {categoriesError, categoriesLoading, categories} = this.props;

        if (categoriesLoading || categories.length === 0) {

            return (
                <Navbar.Brand className="brandItems">
                    <Form.Control as="select" className="SearchItems">
                        <option hidden key='categories'>Loading...</option>
                    </Form.Control>
                </Navbar.Brand>
            )
        }
        if (categoriesError || categories === undefined) {
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
        else {
            return (
                <Navbar.Brand className="brandItems">
                    <Form.Control as="select" className="SearchItems" onChange={this.handelChange}>
                        <option hidden key='categories'>categories</option>
                        <option value=''> </option>
                        {categories.map(item => <option key={item.categories_id}>{item.categories_name}</option>)}

                    </Form.Control>

                </Navbar.Brand>
            )
        }
    }
    handelChange = (e)=>{
        this.props.storeSelectedCategory(e.target.value);
        setTimeout(()=>{console.log(this.props.selectedCategory)}, 1)
}
}

const mapStateToProps = (state) => {
    return {
        categories: state.category.items,
        categoriesLoading: state.category.loading,
        categoryError: state.category.error,
        selectedCategory: state.category.selectedCategory
    }
};
const mapDispatchToProps ={
            getCategories: ()=> getCategories(),
            storeSelectedCategory: name => storeSelectedCategory(name)
};


export default connect(mapStateToProps, mapDispatchToProps)(CategoriesList)