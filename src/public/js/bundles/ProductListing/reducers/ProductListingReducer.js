import CookieHandler from '../../../modules/CookieHandler';
const cookieHandler = new CookieHandler;

export default function reducer(
    state = {
        products: [],
        error: null
    }, action) {

    switch(action.type) {
        case "FETCH_PRODUCT_LISTINGS":
            return {
                ...state,
                products: action.payload.products
            }
            break;
    }

    return state;
}