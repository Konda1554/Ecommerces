import { createStore } from "redux";
import rootReducers from "./Reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducers)
let store = createStore(persistedReducer)
let persistor = persistStore(store)


export  {
    store, persistor
}