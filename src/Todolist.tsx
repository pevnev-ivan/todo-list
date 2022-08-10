import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {FilterValueType} from "./App";


export type  TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
    changeTaskStatus: (taskID: string, isDone: boolean) => void
    filter: string
}


export function Todolist(props: PropsType) {
    const [error, setError] = useState<boolean>(false)
    const [title, setTitle] = useState<string>("")

    const addTask = () => {
        if (title.trim().length > 0 ) {
            props.addTask(title)
            setTitle('')
        } else {
            setTitle('')
            setError(true)
        }
    }

    const onKeyDownAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask()
        }
    }

    const onChangeSetTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setError(false)
    }


    const tasksListItems = props.tasks.length ? props.tasks.map(task => {
        const removeTask = () => {
            props.removeTask(task.id)
        }
        return (
            <li key={task.id} className={task.isDone ? 'isDone' : ''}>
                <input onChange={(e) => props.changeTaskStatus(task.id, e.currentTarget.checked)} type="checkbox"
                       checked={task.isDone}/>
                <span>{task.title}</span>
                <button onClick={removeTask}>x</button>
            </li>
        )
    }) : <span>TaskList Is Empty</span>



    return <div>
        <h3>{props.title}</h3>
        <div>
            <input
                className={error ? 'inputError' : ''}
                value={title}
                onChange={onChangeSetTitle}
                onKeyDown={onKeyDownAddTask}
            />
            {error && <span>Title is required</span>}
            <button onClick={addTask}>+</button>
        </div>


        <ul>
            {tasksListItems}
        </ul>


        <div>
            <button className={props.filter === 'all' ? 'currentFilter' : ''}
                    onClick={() => props.changeFilter('all')}>All
            </button>
            <button className={props.filter === 'active' ? 'currentFilter' : ''}
                    onClick={() => props.changeFilter('active')}>Active
            </button>
            <button className={props.filter === 'completed' ? 'currentFilter' : ''}
                    onClick={() => props.changeFilter('completed')}>Completed
            </button>
        </div>
    </div>
}
