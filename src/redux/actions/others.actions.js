import { AnyAction } from "@reduxjs/toolkit"
import { othersConstants } from "../constants"

const toggleDrawing = () => {
    return (dispatch) => {
        dispatch({
            type: othersConstants.TOGGLE_OPEN_DRAWER,
        })
    }
}


export const othersActions = {
    toggleDrawing
}