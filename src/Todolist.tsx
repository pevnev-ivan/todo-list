import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import AddItemForm from "./components/AddItemForm";
import EditableSpan from "./components/EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todoListID: string, taskId: string) => void
    changeFilter: (todoListID: string, value: FilterValuesType) => void
    addTask: (todoListID: string, title: string) => void
    changeTaskStatus: (todoListID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodoListHandler: any
    updateTask: (todoListID: string, taskId: string, newTitle: string) => void
    updateTodoList: (todoListID: string, newTitle: string) => void
}

function DeleteIcon(props: { onClick: () => any, fontSize: string }) {
    return null;
}

export function Todolist(props: PropsType) {

    const removeTodoListHandler = () => props.removeTodoListHandler(props.todoListID)
    const onAllClickHandler = () => props.changeFilter(props.todoListID, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todoListID, "active");
    const onCompletedClickHandler = () => props.changeFilter(props.todoListID, "completed");
    const addTaskHandler = (newTitle: string) => {
        props.addTask(newTitle, props.todoListID)
    }

    const updateTodoListHandler = (newTitle: string) => {
        props.updateTodoList(props.todoListID, newTitle)
    }

    const updateTaskHandler = (newTitle: string, taskID: string) => {
        props.updateTask(props.todoListID, taskID, newTitle)
    }

    return <div>
        <h3>
            <EditableSpan callback={updateTodoListHandler} title={props.title}/>
            <IconButton onClick={removeTodoListHandler} aria-label="delete" size="small">
                <Delete/>
            </IconButton>
        </h3>
        <AddItemForm callback={addTaskHandler}/>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(props.todoListID, t.id)
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        props.changeTaskStatus(props.todoListID, t.id, e.currentTarget.checked);
                    }
                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                        <Checkbox
                            defaultChecked
                            onChange={onChangeHandler}
                            checked={t.isDone}/>
                        <EditableSpan callback={(newTitle) => updateTaskHandler(t.id, newTitle)} title={t.title}/>
                        <IconButton onClick={onClickHandler} aria-label="delete" size="small">
                            <Delete/>
                        </IconButton>
                    </li>
                })
            }
        </ul>
        <div>
            <Button variant={props.filter === 'all' ? "contained" : "outlined"}
                    onClick={onAllClickHandler}>All
            </Button>
            <Button color='secondary' variant={props.filter === 'active' ? "contained" : "outlined"}
                    onClick={onActiveClickHandler}>Active
            </Button>
            <Button color='error' variant={props.filter === 'completed' ? "contained" : "outlined"}
                    onClick={onCompletedClickHandler}>Completed
            </Button>
        </div>
    </div>
}

