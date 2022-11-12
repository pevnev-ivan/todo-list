import {FilterValuesType, TodoListsType} from "../AppWithRedux";
import {v1} from "uuid";

const initialState: Array<TodoListsType> = []

export const todoListsReducer = (state: Array<TodoListsType> = initialState, action: everyActionCreator) => {
    let newState = [...state]
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return newState.filter(todolist => todolist.id !== action.payload.id)
        case 'ADD-TODOLIST':
           return [{id: action.payload.id, title: action.payload.title, filter: action.payload.filter}, ...state]
        case 'CHANGE-TODOLIST-TITLE':
            return newState.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        case 'CHANGE-TODOLIST-FILET':
            return newState.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter} : el)
        default: return state
    }

}

type everyActionCreator = removeTodoListAC | addTodoListAC | changeTodoListTitleAC | changeTodoListFilterAC

export type removeTodoListAC = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC  = (todolistID1: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id: todolistID1}
    } as const
}

export type addTodoListAC = ReturnType<typeof addTodoListAC>
export const addTodoListAC  = (newTodoListTitle: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {
            id: v1(),
            title: newTodoListTitle,
            filter: 'all'
        }
    } as const
}

type changeTodoListTitleAC = ReturnType<typeof changeTodoListTitleAC>
export const changeTodoListTitleAC  = (todoListID: string, newTodoListTitle: string) => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        payload: {
            id: todoListID,
            title: newTodoListTitle
        }
    } as const
}

type changeTodoListFilterAC = ReturnType<typeof changeTodoListFilterAC>
export const changeTodoListFilterAC  = (todoListID: string, newFilter: FilterValuesType) => {
    return {
        type: 'CHANGE-TODOLIST-FILET',
        payload: {
            id: todoListID,
            filter: newFilter
        }
    } as const
}



