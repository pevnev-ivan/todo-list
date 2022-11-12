import {v1} from "uuid";
import {TodoListsType} from "../../App";
import {
    addTodoListAC,
    changeTodoListFilterAC,
    changeTodoListTitleAC,
    removeTodoListAC,
    todoListsReducer
} from "../todoList-reducer";

let todolistID1: string
let todolistID2: string

let startState: Array<TodoListsType>

beforeEach(() => {
    todolistID1 = v1();
    todolistID2 = v1();

    startState = [
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ]
})

test ('TodoList should be deleted',() => {
    const endState = todoListsReducer(startState, removeTodoListAC(todolistID1))

    expect(endState.length).toBe(1)
    expect(endState[0].id).toBe(todolistID2)

})

test ('TodoList should be added',() => {

    const newTodoListTitle = 'New Todo'
    const endState = todoListsReducer(startState, addTodoListAC(newTodoListTitle))

    expect(endState.length).toBe(3)
    expect(endState[2].title).toBe(newTodoListTitle)

})

test ('TodoList title should be updated',() => {

    const newTodoListTitle = 'Changed Todo title'
    const endState = todoListsReducer(startState, changeTodoListTitleAC(todolistID1, newTodoListTitle))

    expect(endState[0].title).toBe(newTodoListTitle)

})

test ('TodoList filter should be updated',() => {

    const endState = todoListsReducer(startState, changeTodoListFilterAC(todolistID1, 'active'))
    expect(endState[0].filter).toBe('active')

})