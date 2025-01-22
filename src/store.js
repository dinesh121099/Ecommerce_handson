import { configureStore } from "@reduxjs/toolkit"
import signupReducers from './features/signup/signup-slice'
import signinReducers from './features/signin/signin-slice'
import cartReducers from './features/cart/cart-slice'

const store = configureStore({
    reducer: {
        signup: signupReducers,
        signin: signinReducers,
        cart: cartReducers,
    },
});

export default store;