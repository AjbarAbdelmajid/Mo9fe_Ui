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
                                        <img src={this.props.postImage(profile.User_id)} className="postListImage" alt="this will show if there is not showing "/>
                                        <Media.Body>
                                            <Link to={'/post/pro/'+profile.id_Profile }>
                                                <h3>{profile.profile_title}</h3>
                                            </Link>
                                            <p>{this.props.shortTheDescription(profile.profile_description)}</p>
                                            <span className="createdDate">posted at : {profile.createdAt}</span>
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

    let profileCondition = {};
    if(state.searchBy.categoryName === null && state.searchBy.cityName === null ){
        profileCondition.value = state.profiles.profiles;
    }
    else {
        if(state.searchBy.categoryName !== null && state.searchBy.cityName !== null){
            profileCondition.value = state.profiles.profiles.filter(profile => profile.code_postal === parseInt(state.searchBy.cityName) && profile.categories_id === state.searchBy.categoryName)
        }
        else if(state.searchBy.cityName !== null){
            profileCondition.value = state.profiles.profiles.filter(profile => profile.code_postal === parseInt(state.searchBy.cityName))
        }
        else{
            profileCondition.value = state.profiles.profiles.filter(profile => profile.categories_id === state.searchBy.categoryName)
        }
    }
    return {
        profiles: profileCondition.value,
        loadingProfiles: state.profiles.loadingProfiles,
        profileError: state.profiles.profileError,
    }
};
const mapDispatchToProps = {
    getProfile: () => getProfiles(),
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilesPost)