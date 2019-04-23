import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Media } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import './index.css';
import defaultImage from './defaultImage.jpg'

class Post extends Component {
    constructor(props){
        super(props);
         this.state = {
            dummyData : {
                title : 'the title',
                description : 'the description of something that is soo stupid, or maybe not ho knows not me',
                createdat: '12/34/2019'
            }
        }
    }
    render() {
        return (
                <div className="card col-9  posts" >
                    {this.postGenerator(this.state.dummyData, defaultImage)}
                    {this.postGenerator(this.state.dummyData, defaultImage)}
                    {this.postGenerator(this.state.dummyData, defaultImage)}
                    {this.postGenerator(this.state.dummyData, defaultImage)}
                    {this.postGenerator(this.state.dummyData, defaultImage)}
                    {this.postGenerator(this.state.dummyData, defaultImage)}

                </div>
        )
    }

    postGenerator = (thePost, img)=>{
        return (
            <div className="card-content ">
                <Media >
                    <img src={img} alt="this will show if there is not showing "/>
                    <Media.Body>
                        <Link to={'/post/' }>
                            <h3>{thePost.title}</h3>
                        </Link>
                        <p>{thePost.description}</p>
                        <span className="createdDate">posted at : {thePost.createdat}</span>
                    </Media.Body>

                </Media>
            </div>
        )
    }

}
export default Post