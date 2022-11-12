import React, {ChangeEvent} from 'react';
import {FilterValuesType} from "./AppWithRedux";
import {TaskType} from "./Todolist";
import EditableSpan from "./components/EditableSpan";
import {Button, Checkbox, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import AddItemForm from "./components/AddItemForm";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";
import {changeTodoListFilterAC, changeTodoListTitleAC, removeTodoListAC} from "./state/toDoListReducer";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/taskReducer";

export type TodoListReduxType = {
    todoListID: string
    title: string
    filter: string
}

const TodoListWithRedux = ({todoListID, title, filter}: TodoListReduxType) => {

    const tasks = useSelector<AppRootStateType, Array<TaskType>>(state => state.tasks[todoListID])
    const dispatch = useDispatch()



    const removeTodoListHandler = () => {
        dispatch(removeTodoListAC(todoListID))
    }
    const onAllClickHandler = () => {
        dispatch(changeTodoListFilterAC(todoListID, 'all'))
    }
    const onActiveClickHandler = () => {
        dispatch(changeTodoListFilterAC(todoListID, 'active'))
    }
    const onCompletedClickHandler = () => {
        dispatch(changeTodoListFilterAC(todoListID, 'completed'))
    }
    const addTaskHandler = (newTitle: string) => {
        dispatch(addTaskAC(todoListID, newTitle))
    }
    const updateTodoListHandler = (newTitle: string) => {
        dispatch(changeTodoListTitleAC(todoListID, newTitle))
    }

    const updateTaskHandler = (taskID: string, newTitle: string, ) => {
        dispatch(changeTaskTitleAC(todoListID, taskID, newTitle))
    }

    const removeTaskHandler = (todoListID: string, taskID: string) => {
        dispatch(removeTaskAC(todoListID, taskID))
    }

    const changeTaskStatus = (todoListID: string, taskID: string, e: boolean) => {
        dispatch(changeTaskStatusAC(todoListID, taskID, e))
    }

    return (
        <div>
            <h3>
                <EditableSpan callback={updateTodoListHandler} title={title}/>
                <IconButton onClick={removeTodoListHandler} aria-label="delete" size="small">
                    <Delete/>
                </IconButton>
            </h3>
            <AddItemForm callback={addTaskHandler}/>
            <ul>
                {
                   tasks.map(t => {

                        const onClickHandler = () => removeTaskHandler(todoListID, t.id)
                        const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                            changeTaskStatus(todoListID, t.id, e.currentTarget.checked);
                        }
                        return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                            <Checkbox
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
                <Button variant={filter === 'all' ? "contained" : "outlined"}
                        onClick={onAllClickHandler}>All
                </Button>
                <Button color='secondary' variant={filter === 'active' ? "contained" : "outlined"}
                        onClick={onActiveClickHandler}>Active
                </Button>
                <Button color='error' variant={filter === 'completed' ? "contained" : "outlined"}
                        onClick={onCompletedClickHandler}>Completed
                </Button>
            </div>
        </div>
    );
};

export default TodoListWithRedux;