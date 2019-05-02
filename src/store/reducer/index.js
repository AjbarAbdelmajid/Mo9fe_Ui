import {combineReducers} from 'redux'
import cityReducer from './cityReducer'
import categoryReducer from './categoryReducer'
import announceReducer from './announceReducer'
import userReducer from './userReducer'
import profileReducer from './profileReducer'
import searchReducer from './SearchReducer'

const indexReducer = combineReducers({
    city: cityReducer,
    category: categoryReducer,
    announce: announceReducer,
    users: userReducer,
    profiles: profileReducer,
    searchBy: searchReducer
});

export default indexReducer
