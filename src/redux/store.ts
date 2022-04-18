import {applyMiddleware, combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../localStoradge";

let rootReducer = combineReducers(
    {
        counter: counterReducer
    });

export let store = createStore(rootReducer, loadState(), applyMiddleware(thunk));

export type AppStateType = ReturnType<typeof rootReducer>

store.subscribe(() => {

    saveState('counter', {
        counter: store.getState().counter
    });
});

//@ts-ignore
window.store = store
