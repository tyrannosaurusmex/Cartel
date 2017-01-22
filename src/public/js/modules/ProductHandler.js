import Config from '../Config';

export default class ProductHandler {
    constructor(data) {
        this.data = data;
    }
    getPriceByCurrecy(currency) {
        if(this.data.price[currency].length) {
            return this.data.price[currency];
        }
        return false;
    }
    getSymbolByCurrency(currency) {
        let availableCurrencies = Config.getAvailableCurrencies();

        for(let curr in availableCurrencies) {
            if (availableCurrencies[curr].code == currency) {
                return availableCurrencies[curr].symbol;
            }
        }
        return false;
    }
}