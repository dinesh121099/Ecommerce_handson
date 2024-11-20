import { configureStore } from "@reduxjs/toolkit";
import signupReducers from './features/signup/signup-slice'

const store = configureStore({
    reducer: {
        signup: signupReducers,
    },
});

export default store;