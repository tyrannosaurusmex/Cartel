import * as Salsa from '../library/salsa';
import CookieHandler from '../modules/CookieHandler';

let cookieHandler = new CookieHandler();

export function fetchUserOptionsCurrency() {
    return {
        type: "FETCH_USER_OPTIONS_CURRENCY",
        payload: {
            currency: cookieHandler.getUserOptionsCurrency()
        } 
    }
}

export function setUserOptionsCurrency(currency) {
    cookieHandler.updateUserOptionsCurrency(currency);
    cookieHandler.resetCookie();

    return {
        type: "SET_USER_OPTIONS_CURRENCY",
        payload: {
            currency: currency
        }
    };
}