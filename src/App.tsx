import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
// eslint-disable-next-line

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'HTML', isDone: false},
        {id: v1(), title: 'CSS', isDone: true},
        {id: v1(), title: 'JavaScript', isDone: false},
    ])
    const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (taskID: string) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }

    const addTask = (title: string) => {
        const newTask: TaskType =
            {
                id: v1(),
                title: title,
                isDone: false
            }
        setTasks([newTask, ...tasks])
    }

    let tasksForRender;
    switch (filter) {
        case 'completed':
            tasksForRender = tasks.filter(t => t.isDone)
            break
        case 'active':
            tasksForRender = tasks.filter(t => !t.isDone)
            break
        default:
            tasksForRender = tasks
    }

    const changeFilter = (filter: FilterValueType) => {
        setFilter(filter)
    }

    const changeTaskStatus = (taskID: string, isDone: boolean) => {
        setTasks(tasks  .map(t => t.id === taskID ? {...t, isDone } : t))
    }

    return (
        <div className="App">
            <
                Todolist
                title={"What to learn"}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeTaskStatus}
                filter={filter}
            />


        </div>
    );
}

export default App;
