import CookieHandler from '../modules/CookieHandler';
import sampleProduct from './sampleProduct';

const cookieHandler = new CookieHandler();

let data = {
    userCurrency: cookieHandler.getUserOptionsCurrency(),
    products : {
        0: sampleProduct
    }
}