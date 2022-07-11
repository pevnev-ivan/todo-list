import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {


    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: false},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JavaScript', isDone: false},
    ])
// eslint-disable-next-line
    const [filter, setFilter] = useState<FilterValueType>('all')

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
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

    return (
        <div className="App">
            <
                Todolist
                title={"What to learn"}
                tasks={tasksForRender}
                removeTask={removeTask}
                changeFilter={changeFilter}
            />


        </div>
    );
}

export default App;
