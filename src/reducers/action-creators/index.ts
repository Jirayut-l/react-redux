import { Dispatch } from "redux"
import { Action } from '../action'
import {ActionType} from  '../action-type'

export const increment = (value: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.INCREMENT,
            payload: value
        })
    }
}

export const decrement = (value: number) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.DECREMENT,
            payload: value
        })
    }
}
