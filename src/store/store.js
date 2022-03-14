import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { carritoReducer } from "../reducers/carritoReducers";
import { productoReducer } from "../reducers/productoReducer";
import { userReducer } from "../reducers/userReducer";


const composeEnhancers = (typeof window !== 'undefined' && 
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    user: userReducer,
    producto: productoReducer,
    carrito: carritoReducer
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
)