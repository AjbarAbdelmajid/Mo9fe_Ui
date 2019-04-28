import {ACCOUNTS_IMAGES} from "../action/userAction";


const initialState = {
    accountsImages: []
};

 const userReducer = (state = initialState, action)=>{

     switch (action.type){
         case ACCOUNTS_IMAGES:
             return {
                 ...state,
                 accountsImages: action.imagesPayload
             };
         default: {return state}
     }
};

 export default userReducer