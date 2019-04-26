import axios from 'axios'
import config from '../../config'

export const GET_Cities_BEGIN = 'GET_Cities_BEGIN';
export const GET_Cities_SUCCESS = 'GET_Cities_SUCCESS';
export const GET_Cities_FAILURE = 'GET_Cities_FAILURE';

// grab the data
export const fetchCities =  ()=>{
    return dispatch => {
        dispatch(grabbingCitiesDataBegging());

        //get data from api
        return axios.get(`${config.baseUrl}sort/public/list/cities`)
            .then(response=>{
                if (response.statusText !== 'OK'){

                    throw Error(response.status)
                } else {
                    dispatch(grabbingCitiesDataSuccess(response.data))
                }
        }).catch(err => {
            dispatch(grabbingCitiesDataFail(err.message));
            console.log(err);
            })
    }
};

// to inform us that the fetching is begging
export const grabbingCitiesDataBegging =  ()=>({
    type: GET_Cities_BEGIN
});

// to store the grabbed data from api
export const grabbingCitiesDataSuccess = cities =>({
    type: GET_Cities_SUCCESS,
    payload: {cities}
});

// in case if an error happened
export const grabbingCitiesDataFail = error =>({
    type: GET_Cities_FAILURE,
    payload: {error}
});