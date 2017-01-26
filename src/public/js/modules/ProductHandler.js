import Config from '../Config';

export default class ProductHandler {
    constructor(data) {
        this.data = data;
    }
    getPriceByCurrecy(currency, variant = 0) {
        if(this.data.variants[variant].price[currency].length) {
            return this.data.variants[variant].price[currency];
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
    getLowestVariantPrice(currency) {
        let lowestPrice = '';
        for(let variant in this.data.variants) {
            if(lowestPrice.length) {
                if (lowestPrice > this.data.variants[variant].price[currency]) {
                    lowestPrice = this.data.variants[variant].price[currency];
                }   
            } else {
                lowestPrice = this.data.variants[variant].price[currency];
            }
        }
        return lowestPrice;
    }
}