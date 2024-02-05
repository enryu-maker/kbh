const initialState = {
    products: [],
    gallery: [],
    about: [],
    company: [],
    banner: [],
    community: [],
    home: [],
    logo: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case "PRODUCTS":
            return {
                ...state,
                products: action.payload,
            };
        case "GALLERY":
            return {
                ...state,
                gallery: action.payload,
            };
        case "ABOUT":
            return {
                ...state,
                about: action.payload,
            };
        case "COMPANY":
            return {
                ...state,
                company: action.payload,
            };
        case "BANNER":
            return {
                ...state,
                banner: action.payload,
            };
        case "COMMUNITY":
            return {
                ...state,
                community: action.payload,
            };
        case "HOME":
            return {
                ...state,
                home: action.payload,
            };
        case "LOGO":
            return {
                ...state,
                logo: action.payload,
            };
        default:
            return state;
    }
}