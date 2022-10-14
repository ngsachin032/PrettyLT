import { combineReducers } from 'redux';
import{ ProductReducer } from './Reducer'

const appReducer = combineReducers({
    cartdata: ProductReducer
});

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action)
}
export default rootReducer;