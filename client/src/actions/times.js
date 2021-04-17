import * as api from "../api";

// Action Creators 
export const getTimes = () => async (dispatch) => {
    try {
        const { data } = await api.getTimes();
        dispatch({ type: "FETCH_ALL", payload: data });
    } catch (error) {
        console.log(error.message)
    }
}

export const createTime = (time) => async (dispatch) => {
    try {
        const { data } = await api.createTime(time);

        dispatch( { type: "CREATE", payload: data });
    } catch (error) {
        console.log(error);
    }
}