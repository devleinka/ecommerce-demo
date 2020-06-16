import { createSelector } from 'reselect';
import { createStore } from 'redux';

// input selector: doesn't use createSelector
// output selector: uses input selectors and createSelector to create itself

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

//because we use createSelector(), the output selector is now a memoized selector

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    cartItems => 
    cartItems.reduce(
        (accumulatedQuantity, cartItem) => 
            accumulatedQuantity + cartItem.quantity, 
            0
    )
)
