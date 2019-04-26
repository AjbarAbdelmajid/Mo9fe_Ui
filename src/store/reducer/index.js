import {combineReducers} from 'redux'
import cityReducer from './cityReducer'
import categoryReducer from './categoryReducer'

const indexReducer = combineReducers({
    city: cityReducer,
    category: categoryReducer
});

export default indexReducer
