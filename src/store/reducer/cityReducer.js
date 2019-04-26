import { GET_CATEGORIES_BEGIN , GET_CATEGORIES_SUCCESS, GET_CATEGORIES_FAILURE} from '../action/cityAction'

const initialState = {
    items: [],
    loading: false,
    error: null
};

const cityReducer = (state = initialState, action)=>{
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
                items: action.payload.cities
            };
        case GET_CATEGORIES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                items: []
            };
        default:
            return state;
    }
};

export default cityReducer