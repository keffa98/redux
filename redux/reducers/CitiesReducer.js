
import { CITIES_INIT } from '../actions/CitiesActions';
const INITIAL_STATE = {
    cities: []
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CITIES_INIT:
            return { cities: action.payload };
    }
    return state;
}
