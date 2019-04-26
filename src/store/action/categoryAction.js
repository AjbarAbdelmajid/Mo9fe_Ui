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
            .then(data=>{
                if (data.statusText !== 'OK'){
                    dispatch(grabbingCategoriesDataFail(data.statusText))
                } else {
                    dispatch(grabbingCategoriesDataSuccess(data.data))
                }
            }).catch(err => {throw Error(err)
                })
    }
};

// to inform us that the fetching is begging
export const grabbingCategoryBegging =  ()=>({
    type: GET_CATEGORIES_BEGIN
});

// to store the grabbed data from api
export const grabbingCategoriesDataSuccess = categories =>({
    type: GET_CATEGORIES_SUCCESS,
    loaded: {categories}
});

// in case if an error happened
export const grabbingCategoriesDataFail = error =>({
    type: GET_CATEGORIES_FAILURE,
    loaded: {error}
});