import {Action} from './action';
import {ActionType} from './action-type';

const  initialState = 0;

const count =( state:number = initialState,action:Action) :number=>{
    switch (action.type) {
        case ActionType.INCREMENT:
            return state + (action.payload??0) ;
        case ActionType.DECREMENT:
            return state - (action.payload??0);
        default:
            return state
    }
}

export  default count;



