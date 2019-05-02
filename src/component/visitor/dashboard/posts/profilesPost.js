import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Media } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './index.css'
import {connect}  from 'react-redux'
import {getProfiles} from "../../../../api_calls"

class ProfilesPost extends Component {
    componentDidMount(){
        this.props.getProfile();
    }

    render() {
        const {profileError, loadingProfiles, profiles} = this.props;
        if (loadingProfiles || profiles.length === 0 ){
            return (
                <div style={{display: 'flex', justifyContent: 'center'}}>no profile...</div>
            )
        }
        if (profileError || profiles === undefined){
            return(
                <div style={{display: 'flex', justifyContent: 'center'}}>network error</div>
            )
        } else {
            return (
                <div  >
                    {
                        Array.from(this.props.profiles).map( profile =>{
                            return (
                                <div className="card-content " key={profile.id_Profile}>
                                    <Media >
                                        <img src={this.props.postImage(profile.User_id)} alt="this will show if there is not showing "/>
                                        <Media.Body>
                                            <Link to={'/post/' }>
                                                <h3>{profile.profile_title}</h3>
                                            </Link>
                                            <p>{this.props.shortTheDescription(profile.profile_description)}</p>
                                            <span className="createdDate">posted at : {profile.createdAt}</span>
                                            {console.log(typeof profile.createdAt)}
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
            profiles: state.profiles.profiles,
            loadingProfiles: state.profiles.loadingProfiles,
            profileError: state.profiles.profileError,
        }
    } else {
        if (state.searchBy.cityName !== null && state.searchBy.categoryName !== null){
            return {
                profiles: state.profiles.profiles.filter(profile => profile.code_postal === parseInt(state.searchBy.cityName) && profile.categories_id === state.searchBy.categoryName),
                loadingProfiles: state.profiles.loadingProfiles,
                profileError: state.profiles.profileError,
            }
        }
        else if(state.searchBy.cityName !== null){
            return {
                profiles: state.profiles.profiles.filter(profile => profile.code_postal === parseInt(state.searchBy.cityName)),
                loadingProfiles: state.profiles.loadingProfiles,
                profileError: state.profiles.profileError,
            }
        }
        else {
            return {
                profiles: state.profiles.profiles.filter(profile => profile.categories_id === state.searchBy.categoryName),
                loadingProfiles: state.profiles.loadingProfiles,
                profileError: state.profiles.profileError,
            }
        }

    }

};
const mapDispatchToProps = {
    getProfile: () => getProfiles(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesPost)