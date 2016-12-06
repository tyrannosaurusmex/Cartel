class Config {
    constructor() {
        this.config = {
            currency: {
                availableCurrencies: [
                    "gbp",
                    "usd",
                    "eur"
                ]
            },

            language: {
                availableLanguages: [
                    "en",
                    "es",
                    "fr",
                    "de"
                ]
            }
        }
    }

    // Returns Array
    getAvailableCurrencies()  {
        return this.currency.availableCurrencies;
    }

    // Return Array
    getAvailableLanguages() {
        return this.language.availableLanguages;
    }
}