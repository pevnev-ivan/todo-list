import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "../taskReducer";
import {TasksStateType} from "../../Todolist";
import {addTodoListAC} from "../toDoListReducer";


let startState: TasksStateType
let action: ReturnType<typeof removeTaskAC>
let endState: ReturnType<typeof taskReducer>

beforeEach(() => {
    startState =
        {
            'todolistId1': [
                {id: '1', title: 'CSS', isDone: false},
                {id: '2', title: 'JS', isDone: true},
                {id: '3', title: 'React', isDone: false}
            ],
            'todolistId2': [
                {id: '1', title: 'bread', isDone: false},
                {id: '2', title: 'milk', isDone: true},
                {id: '3', title: 'tea', isDone: false}
            ]
        }
})

test('correct task should be deleted from correct array', () => {

    action = removeTaskAC('2', 'todolistId2')
    endState = taskReducer(startState, action)

    expect(endState).toEqual({
        'todolistId1': [
            {id: '1', title: 'CSS', isDone: false},
            {id: '2', title: 'JS', isDone: true},
            {id: '3', title: 'React', isDone: false}
        ],
        'todolistId2': [
            {id: '1', title: 'bread', isDone: false},
            {id: '3', title: 'tea', isDone: false}
        ]
    })
})

test('correct task should be added to correct array', () => {

    const action = addTaskAC( 'todolistId2','juice')
    const endState = taskReducer(startState, action)

    expect(endState['todolistId1'].length).toBe(3)
    expect(endState['todolistId2'].length).toBe(4)
    expect(endState['todolistId2'][0].id).toBeDefined()
    expect(endState['todolistId2'][0].title).toBe('juice')
    expect(endState['todolistId2'][0].isDone).toBe(false)
})

test('status of specified task should be changed', () => {

    const action = changeTaskStatusAC('todolistId2', '1', true)
    const endState = taskReducer(startState, action)

    expect(endState['todolistId2'][0].isDone).toBe(true)
    expect(endState['todolistId2'][1].isDone).toBe(true)
    expect(endState['todolistId2'][2].isDone).toBe(false)

})

test('title of specified task should be changed', () => {

    const action = changeTaskTitleAC('todolistId2', '1', 'Redux')
    const endState = taskReducer(startState, action)

    expect(endState['todolistId2'][0].title).toBe('Redux')
})

test('new array should be added when new todolist is added', () => {

    const action = addTodoListAC('new todolist')
    const endState = taskReducer(startState, action)

    const keys = Object.keys(endState)
    const newKey = keys.find(k => k != 'todolistId1' && k != 'todolistId2')
    if (!newKey) {
        throw Error('new key should be added')
    }

    expect(keys.length).toBe(3)
    expect(endState[newKey]).toEqual([])
})



