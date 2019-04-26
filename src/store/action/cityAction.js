import axios from 'axios'
import config from '../../config'

export const GET_CATEGORIES_BEGIN = 'GET_CATEGORIES_BEGIN';
export const GET_CATEGORIES_SUCCESS = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

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
            dispatch(grabbingCitiesDataFail(err.message))})
    }
};

// to inform us that the fetching is begging
export const grabbingCitiesDataBegging =  ()=>({
    type: GET_CATEGORIES_BEGIN
});

// to store the grabbed data from api
export const grabbingCitiesDataSuccess = cities =>({
    type: GET_CATEGORIES_SUCCESS,
    payload: {cities}
});

// in case if an error happened
export const grabbingCitiesDataFail = error =>({
    type: GET_CATEGORIES_FAILURE,
    payload: {error}
});