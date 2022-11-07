import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IHorseClassState} from "./interfaces/interface";

const initialState = {
    horse: '',
    isLoading: false,
    error: '',
} as IHorseClassState

export const horseSlice = createSlice({
    name: 'Horse-Register',
    initialState,
    reducers: {
        horseFetching(state) {
            state.isLoading = true;
        },
        horseSuccess(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.horse = action.payload;
            state.error = '';
        },
        horseError(state, action: PayloadAction<any>) {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default horseSlice.reducer
