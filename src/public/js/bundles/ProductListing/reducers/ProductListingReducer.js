import CookieHandler from '../../../modules/CookieHandler';
const cookieHandler = new CookieHandler;

export default function reducer(
    state = {
        products: [],
        fetching: false,
        fetched: false,
        error: null
    }, action) {

    switch(action.type) {
        case "FETCH_PRODUCT_LISTINGS_PENDING":
            return {
                ...state,
                fetching: true,
            }
            break;
        case "FETCH_PRODUCT_LISTINGS_REJECTED":
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
            break;
        case "FETCH_PRODUCT_LISTINGS_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                products: action.payload.data
            }
            break;
    }

    return state;
}