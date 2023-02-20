import { AnyAction } from '@reduxjs/toolkit';
import { othersConstants } from '../constants'


interface ActionType {
    type: string;
    payload?: any;
}

const INITIAL_STATE = {
    isDrawing: false,
}

export const othersReducer = (state = INITIAL_STATE, action: ActionType) => {
    switch (action.type) {

        case othersConstants.TOGGLE_OPEN_DRAWER:
            return {
              ...state,
                openDrawing: !state.isDrawing,
            }

        default:
            return state
    }
}