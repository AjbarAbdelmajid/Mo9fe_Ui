import { GET_CATEGORIES_BEGIN , GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE} from '../action/categoryAction'

const initialState = {
    items: [],
    loading: false,
    error: null
};

const categoryReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_CATEGORIES_BEGIN:
            return {
                ...state,
                loading: true
            };
        case GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.categories
            };
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
            };
        default:
            return state;
    }
};

export default categoryReducer