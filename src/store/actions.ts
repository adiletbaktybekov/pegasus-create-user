import {AppDispatch} from "./index";
import {horseSlice} from "./reducer";
import API from "../https/api";

export const fetchActionHorse = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(horseSlice.actions.horseFetching)
        const response = await API.post('/horse/registration/')
        dispatch(horseSlice.actions.horseSuccess(response.data))
    } catch (e: any) {
        dispatch(horseSlice.actions.horseError(e.message))
    }
}