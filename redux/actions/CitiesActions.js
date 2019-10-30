export const CITIES_INIT = 'CITIES_INIT';
export const CITIES_ADD = 'CITIES_ADD';
export const CITIES_DELETE = 'CITIES_DELETE';

export const init = payload => ({
    type: CITIES_INIT,
    payload
});