import {
    GET_ANNOUNCE_SUCCESS,
    GET_ANNOUNCE_BEGIN,
    GET_ANNOUNCE_FAILURE,
} from "../action/announceAction";

const initialState = {
    announces: [],
    loading: false,
    error: null,
};

const announceReducer = (state = initialState, action)=>{

    switch (action.type) {
        case GET_ANNOUNCE_BEGIN:
            return {
                ...state,
                loading: true
            };
        case GET_ANNOUNCE_SUCCESS:
            return {
                ...state,
                loading: false,
                announces: action.announcesPayload
            };
        case GET_ANNOUNCE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payloadError,
                announces: []
            };
        default:
            return state;
    }
};
export default announceReducer

