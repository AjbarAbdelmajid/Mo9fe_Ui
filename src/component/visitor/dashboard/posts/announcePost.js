import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Media } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
import {connect}  from 'react-redux'
import {getAnnounces} from "../../../../api_calls"

class AnnouncePost extends Component {
    componentDidMount(){
        this.props.getAnnounces();
    }

    render() {
        const {error, loading, announces} = this.props;
        if (loading || announces.length === 0 ){
            return (
                <div style={{display: 'flex', justifyContent: 'center'}}>no announces...</div>
            )
        }
        if (error || announces === undefined){
            return(

                <div style={{display: 'flex', justifyContent: 'center'}}>network error</div>

            )
        } else {
            return (
                <div >
                    {
                        this.props.announces.map( announce =>{
                            return (
                                <div className="card-content " key={announce.announce_id}>
                                    <Media >
                                        <img src={this.props.postImage(announce.user_id)} alt="this will show if there is not showing "/>
                                        <Media.Body>
                                            <Link to={'/post/' }>
                                                <h3>{announce.announce_title}</h3>
                                            </Link>
                                            <p>{this.props.shortTheDescription(announce.announce_description)}</p>
                                            <span className="createdDate">posted at : {announce.createdAt}</span>
                                        </Media.Body>
                                    </Media>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }
    }
}

const mapStateToProps = state =>{
    if(state.searchBy.categoryName === null && state.searchBy.cityName === null ){
        return {
            announces: state.announce.announces,
            loading: state.announce.loading,
            error: state.announce.error,
        }
    }
    else {
        if(state.searchBy.categoryName !== null && state.searchBy.cityName !== null){
            return {
                announces: state.announce.announces.filter(announce => announce.categories_id === state.searchBy.categoryName && announce.code_postal === parseInt(state.searchBy.cityName)),
                loading: state.announce.loading,
                error: state.announce.error,
            }
        }
        else if(state.searchBy.cityName !== null){

            return {
                announces: state.announce.announces.filter(announce => announce.code_postal === parseInt(state.searchBy.cityName)),
                loading: state.announce.loading,
                error: state.announce.error,
            }
        }
        else{
            return {
                announces: state.announce.announces.filter(announce => announce.categories_id === state.searchBy.categoryName),
                loading: state.announce.loading,
                error: state.announce.error,
            }
        }
    }
};

const mapDispatchToProps = {
    getAnnounces: () => getAnnounces(),
};

export default connect(mapStateToProps, mapDispatchToProps)(AnnouncePost)