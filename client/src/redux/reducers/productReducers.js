import * as actionsType from '../constants/productConstants';

export const getProductsReducer = (state = {products: []}, action) => {
    switch (action.type) {
        case actionsType.GET_PRODUCTS_REQUEST:
            return {
                loading: true,
                products: [],
            }
        case actionsType.GET_PRODUCTS_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case actionsType.GET_PRODUCTS_FAIL:
            return {
                loading: false,
                error: action.payload
            }
            
    
        default:
            return state;
    }
};

export const getProductDetailsReducer = (state = {product: {}}, action) => {
    switch (action.type) {
        case actionsType.GET_PRODUCT_DETAILS_REQUEST:
            return {
                loading: true,
            }
        case actionsType.GET_PRODUCT_DETAILS_SUCCESS: 
            return {
                loading: false,
                product: action.payload
            }
        case actionsType.GET_PRODUCT_DETAILS_FAIL: 
            return {
                loading: false,
                error: action.payload
            }
        case actionsType.GET_PRODUCT_DETAILS_RESET: 
            return {
                product: {}
            }
        default:
            return state;
    }
}