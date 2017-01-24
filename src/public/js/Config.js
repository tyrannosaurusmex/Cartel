class Config {
    constructor() {
        this.config = {
            site: {
                name: 'Cartel',
                url: 'http://localhost:3000',
                api_url: 'http://localhost:3001'
            },
            catalog: {
                categories: [
                    'music_release'
                ],
                filters: [
                    'format',
                    'genre',
                    'artist'
                ],
                options: {
                    products_per_page: 10
                }
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
    
    getConfigSiteUrl() {
        return this.config.site.url;
    }

    getConfigAPIUrl() {
        return this.config.site.api_url;
    }

    getConfigCatalogFilters() {
        return this.config.catalog.filters;
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