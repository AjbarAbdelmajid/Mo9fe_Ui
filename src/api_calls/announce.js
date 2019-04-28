import axios from 'axios'
import config from '../config'
import {
    AnnounceDataFail,
    AnnounceDataBegging,
    AnnounceDataSuccess
} from "../store/action/announceAction";

// get the announces data
export function getAnnounces (){
    return dispatch => {
        dispatch(AnnounceDataBegging());

        //get data from api
        return axios.get(`${config.baseUrl}publish/announce/list/all`)
            .then(response=>{
                if (response.statusText !== 'OK'){

                    throw Error(response.status)
                } else {
                    dispatch(AnnounceDataSuccess(response.data))
                }
            }).catch(err => {
                dispatch(AnnounceDataFail(err.message));
                console.log(err);
            })
    }
}
