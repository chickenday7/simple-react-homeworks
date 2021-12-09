import {CombinedState, combineReducers, createStore} from "redux";
import messageDataReducer, {stateMessageType} from './H1/H1Reducer'


let reducers = combineReducers({
    homework1:messageDataReducer
})

type AppStateType = ReturnType<typeof reducers>

export type stateType = {
    homework1: stateMessageType
    newMessageText: string
}

export type storeType = {
    store: CombinedState<any>
}

let store = createStore(reducers)

export default store