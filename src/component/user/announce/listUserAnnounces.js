import React from 'react';
import {withRouter, NavLink } from 'react-router-dom';
import {Media} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {connect} from 'react-redux';
import {getUserAnnounces} from "../../../api_calls/announce";
import Details from '../../home_page/dashboard/post_details/announcePostDetails';


class ListPosts extends React.Component {

    componentDidMount(){
        this.props.getUserAnnounces();
    }

    render() {
        const {userAnnouncesError, userAnnounces, location, match } = this.props;

        // if the data are loading from the api
        if (userAnnounces === null && userAnnouncesError === null ){
            return (
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <div className="space"> </div>
                    <img alt='...' src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                </div>
            )
        }

        // if the Api sends an ERROR
        if (userAnnouncesError !== null){
            return(
                <>
                <div className="space"> </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>{userAnnouncesError}</div>
                </>
            )
        }

        // if every thing is oky
        else {
            return (
                <>
                <div className="space"> </div>
                <div className="container-fluid listContainer">
                    <div className="row">

                        {/* the announces list */}
                        <div className=" col-md-4 theList ">
                            {
                                this.props.userAnnounces.map( announce =>{
                                    return (
                                        <div className="card-content myPostsList" key={announce.announce_id}>
                                            <Media >
                                                <Media.Body>
                                                    <NavLink
                                                        to={
                                                            match.params.id === undefined ?
                                                                location.pathname + '/' + announce.announce_id :
                                                                location.pathname.replace(match.params.id, announce.announce_id)
                                                        }
                                                        replace
                                                        className="text-primary ClickMe"
                                                        params={{id: announce.announce_id}}

                                                    >
                                                        <h3  >{announce.announce_title}</h3>
                                                    </NavLink>
                                                </Media.Body>
                                            </Media>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        {/* the announce details*/}
                        <div className="col-md-7 container-fluid">
                            {match.params.id !== undefined ? <Details old={match.params.id}/> : <p> </p>}

                        </div>
                    </div>

                </div>
                </>
            )
        }
    }
}

const mapStateToProps = state =>{
    return {
        userAnnounces: state.announce.userAnnounces,
        userAnnouncesError: state.announce.userAnnouncesFail,
    }
};
const mapDispatchToProps = {
    getUserAnnounces : () => getUserAnnounces()
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListPosts))