import { combineReducers } from 'redux'
import counters from './counter'

const reducers =  combineReducers({counters});
export  default reducers
export  type  RootState = ReturnType<typeof  reducers>

