import { combineReducers } from 'redux'
import { HYDRATE } from 'next-redux-wrapper';
import products from './product'
import cart from './cart'
import wishlist from './wishlist'
import quickView from './quickView'
import compare from './compare'
import productFilters from './productFilters'

const combinedReducer = combineReducers({
    products,
    cart,
    wishlist,
    quickView,
    compare,
    productFilters
})

const reducer = (state, action) => {
    console.log(action.type);
    if (action.type === HYDRATE) {
        const nextState = {
            ...state, // use previous state
            ...action.payload, // apply delta from hydration
        };
        return nextState;
    } else {
        return combinedReducer(state, action);
    }
};

export default reducer