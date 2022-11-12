import {combineReducers, legacy_createStore} from "redux";
import {taskReducer} from "./taskReducer";
import {todoListsReducer} from "./toDoListReducer";

const rootReducer = combineReducers({
    tasks: taskReducer,
    toDoLists: todoListsReducer,
})

export const store = legacy_createStore(rootReducer)
export type AppRootStateType = ReturnType<typeof rootReducer>

//@ts-ignore
window.store = store;