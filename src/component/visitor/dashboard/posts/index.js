import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import AnnouncePost from './announcePost'
import ProfilePost from './profilesPost'
import {getUsersAccountImages} from "../../../../api_calls"
import {connect}  from 'react-redux'
import defaultImage from './defaultImage.jpg'


class Post extends Component {

    componentDidMount(){
        this.props.getUsersAccountImages();
    }
    render() {
        if (this.props.serviceType === 'announce'){
            return (
                <div className="card col-9  posts ">
                    <AnnouncePost postImage={this.postImage} shortTheDescription={this.shortTheDescription}/>
                </div>
            )
        }
        else if (this.props.serviceType === 'profile'){
            return (
                <div className="card col-9  posts ">
                    <ProfilePost postImage={this.postImage} shortTheDescription={this.shortTheDescription}/>
                </div>
            )
        }
        else {
            return (
                <div className="card col-9  posts ">
                    <AnnouncePost postImage={this.postImage} shortTheDescription={this.shortTheDescription}/>
                    <ProfilePost postImage={this.postImage} shortTheDescription={this.shortTheDescription}/>
                </div>
            )
        }
    }
    postImage = (ownerId)=>{
        if(ownerId === null){
            return defaultImage
        } else {
            if (this.props.postImages.length !== 0){

                let path = '';
                this.props.postImages.forEach(img =>{
                    if (img.user_id === ownerId){
                        path = img.file_path;
                    }
                });
                return path
            } else {
                return defaultImage
            }
        }
    };
    shortTheDescription = (description)=>{
        return description.substring(0, 130) + '....';
    };
}

const mapStateToProps = state =>{
    return {
        postImages: state.users.accountsImages,
        serviceType: state.searchBy.serviceType
    }
};
const mapDispatchToProps = {
    getUsersAccountImages: () => getUsersAccountImages()
};

export default connect(mapStateToProps, mapDispatchToProps)(Post)