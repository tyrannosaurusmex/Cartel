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
        case "FETCH_USER_OPTIONS":
            return {...state, fetching: true }
            break;
        case "FETCH_USER_OPTIONS_REJECTED":
            return {...state, fetching: false, error: action.payload }
            break;
        case "FETCH_USER_OPTIONS_FULFILLED":
            return {
                ...state,
                fetching: false,
                fetched: true,
                userOptions: action.payload
            }
            break;
        case "SET_USER_OPTIONS_CURRENCY":
            return {
                ...state,
                userOptions: {
                    ...state.user, currency: action.payload
                }
            }
            break;
        case "SET_USER_OPTIONS_LANGUAGE":
            return {
                ...state,
                userOptions: {
                    ...state.user, language: action.payload
                }
            }
            break;
    }

    return state;
}