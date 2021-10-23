import { combineReducers } from 'redux'

const initialState = {
    allProducts: [],
    product: [],
}

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'allProducts':
            return {
                ...state,
                allProducts: action.payload,
            }
        case 'detailProduct':
            return {
                ...state,
                product: action.payload,
            }
        case 'flashSaleProducts':
            return {
                ...state,
                flashSaleProducts: action.payload,
            }
        case 'popularProducts':
            return {
                ...state,
                popularProducts: action.payload,
            }
        default:
            return state
    }
}

export default combineReducers({
    productReducer,
})
