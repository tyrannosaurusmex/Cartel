class Config {
    constructor() {
        this.config = {
            site: {
                name: 'Cartel'
            },
            currency: {
                availableCurrencies: {
                    gbp: {
                        code: "gbp",
                        symbol: "£"
                    },
                    eur: {
                        code: "eur",
                        symbol: "€"
                    },
                    usd: {
                        code: "usd",
                        symbol: "$"
                    }
                }
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

    // Returns Object
    getConfig() {
        return this.config;
    }

    getConfigSiteName() {
        return this.config.site.name;
    }

    // Returns Array
    getAvailableCurrencies() {
        return this.config.currency.availableCurrencies;
    }

    // Return Array
    getAvailableLanguages() {
        return this.config.language.availableLanguages;
    }
}

export default new Config();