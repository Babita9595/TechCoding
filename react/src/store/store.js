
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UserDetailsReducer } from "./reducer/userDetails";
import { counterReducer } from "./reducer/counter";

//list of all type reducers in single reducer
// const rootreducer = combineReducers({
//     UserDetailsReducer,
//     counterReducer
// })


// export const store = configureStore({
//     reducer: rootreducer,
// })


const store = configureStore({
    reducer: {
        userDetails: UserDetailsReducer,
        counterDetails: counterReducer
        // Add other slices here if needed
    },
});

export default store;



// export default configureStore({
//     reducer: rootreducer,
//     middleware: getDefaultMiddleware =>
//         getDefaultMiddleware({
//             serializableCheck: false,
//         }),
// })