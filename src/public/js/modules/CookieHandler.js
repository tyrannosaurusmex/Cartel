import * as Salsa from '../library/salsa';
import CookieTemplate from '../CookieTemplate';
import Config from '../Config';

export default class CookieHandler {
    constructor() {
        this.cookieObject = {};

        if(Salsa.getCookie(Config.getConfigSiteName()).length) {
            let freshCookie = Salsa.getCookie(Config.getConfigSiteName());
            this.cookieObject = JSON.parse(freshCookie); 
        } else {
            this.cookieObject = CookieTemplate;
        }

        this.resetCookie();
    }
    resetCookie() {
        Salsa.setCookie(Config.getConfigSiteName(), JSON.stringify(this.cookieObject), 30);
    }

    // External get/update Functions
    getUserOptionsCurrency() {
        if (!this.cookieObject.userOptions.currency.length) {
            this.cookieObject.userOptions.currency = CookieTemplate.userOptions.currency;
        }
        return this.cookieObject.userOptions.currency;
    }
    updateUserOptionsCurrency(currency) {
        this.cookieObject.userOptions.currency = currency;
        this.resetCookie();
    }
    getUserOptionsLanguage() {
        if (!this.cookieObject.userOptions.language.length) {
            this.cookieObject.userOptions.language = CookieTemplate.userOptions.language;
        }
        return this.cookieObject.userOptions.language;
    }
    updateUserOptionsLanguage(language) {
        this.cookieObject.userOptions.language = language;
        this.resetCookie();
    }
}