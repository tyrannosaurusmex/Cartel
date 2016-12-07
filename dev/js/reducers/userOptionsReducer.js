export default function reducer(
    state = {
        options: {
            currency: 'gbp',
            language: 'en',
        },
        fetching: false,
        fetched: false,
        error: null
    }, action) {

    switch(action.type) {
        case "FETCH_USER_OPTIONS_CURRENCY":
            return {
                ...state,
                fetching: false,
                fetched: true,
                options: {
                    ...state.options, currency: action.payload.currency
                }
            }
            break;
        case "SET_USER_OPTIONS_CURRENCY":
            return {
                ...state,
                options: {
                    ...state.options, currency: action.payload.currency
                }
            }
            break;
    }

    return state;
}