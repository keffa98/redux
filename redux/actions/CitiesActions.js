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

export const addAsync = () => {
    return dispatch => {
        AsyncStorage.getItem('cities').then(data => {
            let tab = [];
            if (data !== null) {
                tab = JSON.parse(data);
            }
            tab.push(this.state.cityName);
            AsyncStorage.setItem('cities', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: CITIES_INIT, payload: tab });
                });
        });
    }
}
export const deleteAsync = (cityName) => {
    return dispatch => {
        AsyncStorage.getItem('cities').then(data => {
            const tab = JSON.parse(data);
            tab.splice(tab.findIndex(e => e === cityName), 1);
            AsyncStorage.setItem('cities', JSON.stringify(tab))
                .then(() => {
                    return dispatch({ type: CITIES_INIT, payload: JSON.parse(data) });
                });
        });
    };
}
