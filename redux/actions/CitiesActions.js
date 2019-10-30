import { AsyncStorage } from 'react-native';

export const CITIES_INIT = 'CITIES_INIT';
export const CITIES_ADD = 'CITIES_ADD';
export const CITIES_DELETE = 'CITIES_DELETE';

/*export const init = payload => ({
    type: CITIES_INIT,
    payload
});*/

export const initAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('cities').then(data => {
            return dispatch({ type: CITIES_INIT, payload: JSON.parse(data) });
        });
    };
}
