import { createStore, combineReducers } from "redux";
import ServicesReducer from "./reducers/ServicesReducer";
import CitiesReducer from "./reducers/CitiesReducer";


const rootReducer = combineReducers({
    serviceReducer: ServicesReducer,
    citiesReducer: CitiesReducer
});
export const store = createStore(rootReducer);