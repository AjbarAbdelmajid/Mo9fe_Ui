import axios from 'axios'
import config from '../config'
import {
    ProfileDataFail,
    ProfileDataBegging,
    ProfileDataSuccess,
} from "../store/action/profileAction";

export function getProfiles (){
    return dispatch => {
        dispatch(ProfileDataBegging());

        //get data from api
        return axios.get(`${config.baseUrl}publish/profile/list/all`)
            .then(response=>{
                if (response.statusText !== 'OK'){

                    throw Error(response.status)
                } else {
                    dispatch(ProfileDataSuccess(response.data))
                }
            }).catch(err => {
                dispatch(ProfileDataFail(err.message));
                console.log(err);
            })
    }
}
