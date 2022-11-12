import {TasksStateType} from "../Todolist";
import {v1} from "uuid";
import {addTodoListAC, removeTodoListAC} from "./todoList-reducer";

export type removeTaskAC =  ReturnType<typeof removeTaskAC>
export type addTaskAC =  ReturnType<typeof addTaskAC>
export type changeTaskStatusAC = ReturnType<typeof changeTaskStatusAC>
export type changeTaskTitleAC = ReturnType<typeof changeTaskTitleAC>


export const taskReducer = (state: TasksStateType, action: everyActionCreator) => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(el => el.id !== action.payload.taskId)}
        case 'ADD-TASK':
            return {...state, [action.payload.todolistId]: [{id: v1(), title: action.payload.title, isDone: false}]}
        case 'CHANGE-TASK-STATUS':
            return {...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {...el, isDone: action.payload.isDone} : el)}
        case 'CHANGE-TASK-TITLE':
            return {...state,
                [action.payload.todolistId]: state[action.payload.todolistId].map(el => el.id === action.payload.taskId ? {...el, title: action.payload.title} : el)}
        case 'ADD-TODOLIST':
            return {...state, [action.payload.id]: []}
        case 'REMOVE-TODOLIST':
            let copyState = {...state}
            delete copyState[action.payload.id]
            return {...copyState}
    }


    return state
}

type everyActionCreator =
    removeTaskAC | addTaskAC | removeTodoListAC |
    changeTaskStatusAC | changeTaskTitleAC | addTodoListAC




export const removeTaskAC  = (taskId: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {
            taskId,
            todolistId
        }
    } as const
}

export const addTaskAC  = (todolistId: string, title: string) => {
    return {
        type: 'ADD-TASK',
        payload: {
            todolistId,
            title
        }
    } as const
}

export const changeTaskStatusAC  = (todolistId: string, taskId: string, isDone: boolean) => {
    return {
        type: 'CHANGE-TASK-STATUS',
        payload: {
            todolistId,
            taskId,
            isDone
        }
    } as const
}

export const changeTaskTitleAC  = (todolistId: string, taskId: string, title: string) => {
    return {
        type: 'CHANGE-TASK-TITLE',
        payload: {
            todolistId,
            taskId,
            title
        }
    } as const
}




