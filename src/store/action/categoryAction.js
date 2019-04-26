import axios from 'axios'
import config from '../../config'

export const GET_CATEGORIES_BEGIN = 'GET_CATEGORIES_BEGIN';
export const GET_CATEGORIES_SUCCESS  = 'GET_CATEGORIES_SUCCESS';
export const GET_CATEGORIES_FAILURE = 'GET_CATEGORIES_FAILURE';

// grab the data
export const fetchCategories = ()=>{
    return dispatch => {
        dispatch(grabbingCategoryBegging());

        //get data from api
        return axios.get(`${config.baseUrl}sort/public/list/categories`)
            .then(response=>{
                console.log(response);
                if (response.statusText !== 'OK'){
                    throw Error(response.status)
                } else {
                    dispatch(grabbingCategoriesDataSuccess(response.data))
                }
            }).catch(err => {
                dispatch(grabbingCategoriesDataFail(err.message))})
    }
};

// to inform us that the fetching is begging
export const grabbingCategoryBegging =  ()=>({
    type: GET_CATEGORIES_BEGIN
});

// to store the grabbed data from api
export const grabbingCategoriesDataSuccess = categories =>({
    type: GET_CATEGORIES_SUCCESS,
    payload: {categories}
});

// in case if an error happened
export const grabbingCategoriesDataFail = error =>({
    type: GET_CATEGORIES_FAILURE,
    payload: {error}
});