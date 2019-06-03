import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import {Form, Carousel} from 'react-bootstrap'
import {withRouter} from 'react-router-dom'
import bagIcon from './bag_icon.png'
import locationIcon from './location_icon.png'
import {connect} from 'react-redux'
import {getAllImages} from "../../../../api_calls/uploadImages";

class AnnouncePostDetail extends Component {
    componentDidMount(){
        this.props.getAllImages();
    }
    //get the selected announce with the neame of the city and the category
    announce =  this.props.announces.filter(element => element.announce_id === this.props.match.params.id);
    city = this.props.cities.filter(city => city.code_postal === this.announce[0].code_postal);
    category = this.props.categories.filter(category => category.categories_id === this.announce[0].categories_id);

    render(){
        return (
            <div className="container-fluid mr-5 PostDetails" >
                <Form>

                    <Form.Group>
                        <Form.Label><h3 >{this.announce[0].announce_title} </h3></Form.Label><br/>

                        <img src={locationIcon} className="detailsImage" alt="location icon"/>

                        <Form.Label className="smallText">{this.city[0].city_name}</Form.Label><br/>

                        <img src={bagIcon} className="detailsImage" alt="bag icon"/>

                        <Form.Label className="smallText">{this.category[0].categories_name}</Form.Label>
                    </Form.Group>

                    <Form.Group>
                        <Form.Text className="description">{this.announce[0].announce_description}</Form.Text>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label> phone : {this.announce[0].phone}</Form.Label>
                    </Form.Group>

                    {this.imagesSlide()}
                </Form>
            </div>
        )
    }
    imagesSlide = ()=>{
        let images = this.props.allImages.filter(image => image.announce_id === this.announce[0].announce_id);
        if (images){
            return (
                <Carousel className="imagesContainer" >
                    {images.map(img =>  {
                        return(
                            <Carousel.Item key={img.file_id}>
                                <img src={img.file_path} className="d-block w-100 imagesSlide" alt="there is nothing to show"/>
                            </Carousel.Item>
                        )
                    })}
                </Carousel>
            )
        } else {
            return (<div> </div>)
        }
    }
}
const mapStateToProps = (state)=>{
    return {
        announces: state.announce.announces,
        cities: state.city.items,
        categories: state.category.items,
        allImages: state.allImages.imagesStock
    }
};
const mapDispatchToProps = {
    getAllImages: ()=> getAllImages()
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AnnouncePostDetail))