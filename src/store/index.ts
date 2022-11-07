import {combineReducers, configureStore} from "@reduxjs/toolkit";
import horseSlice from "./reducer";

const rootReducer = combineReducers({
    horseSlice
})

export const setUpStore=()=>{
    return configureStore({
        reducer: rootReducer
    })
}

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>
export type  AppStore = ReturnType<typeof setUpStore>
export type AppDispatch = AppStore['dispatch']