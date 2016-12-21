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
                    },
                    jpy: {
                        code: "jpy",
                        symbol: '¥'
                    }
                }
            },

            language: {
                availableLanguages: {
                    en: {
                        code: 'en',
                        name: 'English'
                    },
                    fr: {
                        code: 'fr',
                        name: 'French'
                    },
                    es: {
                        code: 'es',
                        name: 'Spanish'
                    },
                    de: {
                        code: 'de',
                        name: 'German'
                    }
                }
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

    // Returns Object
    getAvailableCurrencies() {
        return this.config.currency.availableCurrencies;
    }

    // Returns Object
    getAvailableLanguages() {
        return this.config.language.availableLanguages;
    }
}

export default new Config();