import {FilterValuesType, TodoListsType} from "../App";
import {v1} from "uuid";

export const REMOVE_TODO_LIST = 'REMOVE-TODOLIST'
export const ADD_TODO_LIST = 'ADD-TODOLIST'
export const CHANGE_TODO_LIST_TITLE = 'CHANGE-TODOLIST-TITLE'
export const CHANGE_TODO_LIST_FILTER = 'CHANGE-TODOLIST-FILET'

export const todoListsReducer = (state: Array<TodoListsType>, action: everyActionCreator) => {
    switch (action.type) {
        case REMOVE_TODO_LIST:
            return state.filter(todolist => todolist.id != action.payload.id)
        case ADD_TODO_LIST:
           return [...state, {id: action.payload.id, title:'azs', filter: 'all'}]
        case CHANGE_TODO_LIST_TITLE:
            return state.map(el => el.id === action.payload.id ? {...el, title: action.payload.title} : el)
        case CHANGE_TODO_LIST_FILTER:
            return state.map(el => el.id === action.payload.id ? {...el, filter: action.payload.filter} : el)
    }
    return state
}

type everyActionCreator = removeTodoListAC | addTodoListAC | changeTodoListTitleAC | changeTodoListFilterAC

export type removeTodoListAC = ReturnType<typeof removeTodoListAC>
export const removeTodoListAC  = (todolistID1: string) => {
    return {
        type: REMOVE_TODO_LIST,
        payload: {id: todolistID1}
    } as const
}

export type addTodoListAC = ReturnType<typeof addTodoListAC>
export const addTodoListAC  = (newTodoListTitle: string) => {
    return {
        type: ADD_TODO_LIST,
        payload: {
            id: v1(),
            title: newTodoListTitle}
    } as const
}

type changeTodoListTitleAC = ReturnType<typeof changeTodoListTitleAC>
export const changeTodoListTitleAC  = (todoListID: string, newTodoListTitle: string) => {
    return {
        type: CHANGE_TODO_LIST_TITLE,
        payload: {
            id: todoListID,
            title: newTodoListTitle
        }
    } as const
}

type changeTodoListFilterAC = ReturnType<typeof changeTodoListFilterAC>
export const changeTodoListFilterAC  = (todoListID: string, newFilter: FilterValuesType) => {
    return {
        type: CHANGE_TODO_LIST_FILTER,
        payload: {
            id: todoListID,
            filter: newFilter
        }
    } as const
}



