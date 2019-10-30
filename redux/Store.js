import { createStore, combineReducers, applyMiddleware } from "redux";
import ServicesReducer from "./reducers/ServicesReducer";
import CitiesReducer from "./reducers/CitiesReducer";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    serviceReducer: ServicesReducer,
    citiesReducer: CitiesReducer
});
export const store = createStore(rootReducer, applyMiddleware(thunk));