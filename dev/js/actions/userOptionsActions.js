export function fetchUserOptions() {
    // This will grab either a cookie, or if not set
    // user data from API - should it come from larger
    // initial API grab?

    return {
        type: "FETCH_USER_OPTIONS_FULFILLED",
        payload: {
            currency: 'gbp',
            language: 'en'
        }
    };
}

export function setUserOptionsCurrency(currency) {
    // This will set cookie and update user prefs
    // via API

    return {
        type: "SET_USER_OPTIONS_CURRENCY",
        payload: currency
    };
}

export function setUserOptionsLanguage(language) {
    // This will set cookie and update user prefs
    // via API
    
    return {
        type: "SET_USER_OPTIONS_LANGUAGE",
        payload: language
    };
}