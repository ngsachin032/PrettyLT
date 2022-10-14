import { createStore, applyMiddleware } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index'; // the value from combineReducers
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {};
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
};
const middleware = [thunk];

const pReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(pReducer, initialState, applyMiddleware(...middleware));
export const persistor = persistStore(store);