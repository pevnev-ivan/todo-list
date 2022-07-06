import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";

function App() {

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: 1, title: 'HTML', isDone: false},
        {id: 2, title: 'CSS', isDone: false},
        {id: 3, title: 'JavaScript', isDone: false},
    ])

    const removeTask = (taskID: number) => {
        setTasks(tasks.filter(task => task.id !== taskID))
    }


    return (
        <div className="App">
            <
                Todolist
                title={"What to learn"}
                tasks={tasks}
                removeTask={removeTask}
            />


        </div>
    );
}

export default App;
