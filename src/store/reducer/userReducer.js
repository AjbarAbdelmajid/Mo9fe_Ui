import {USERS_DATA, GET_USERS_DATA_BEGIN} from "../action/userAction";


const initialState = {
    usersInfo: [],
    loadingUsers: false,
};

const userReducer = (state = initialState, action)=>{

    switch (action.type){
        case USERS_DATA:
            return {
                ...state,
                usersInfo: action.usersPayload,
                loadingUsers: false,
            };
        case GET_USERS_DATA_BEGIN:
            return {
                ...state,
                loadingUsers: true,
            };
        default: {
            return state
        }
     }
};

 export default userReducer