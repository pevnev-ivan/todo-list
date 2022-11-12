import React from 'react';
import './App.css';
import {TasksStateType, Todolist} from './Todolist';
import AddItemForm from "./components/AddItemForm";
import ButtonAppBar from "./components/AppBar";
import {Container, Grid, Paper} from "@mui/material";
import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./state/taskReducer";
import {addTodoListAC, changeTodoListFilterAC, changeTodoListTitleAC, removeTodoListAC} from "./state/toDoListReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./state/store";

export type TodoListsType = {
    id: string
    title: string
    filter: FilterValuesType
}


export type FilterValuesType = "all" | "active" | "completed";

function AppWithRedux() {

    let toDoLists = useSelector<AppRootStateType, Array<TodoListsType>>(state => state.toDoLists)
    let tasks = useSelector<AppRootStateType, TasksStateType>(state => state.tasks)

    const dispatch = useDispatch()

    function addTodoList(newTitle: string) {
        dispatch(addTodoListAC(newTitle))
    }

    function removeTask(todoListID: string, taskID: string) {
        dispatch(removeTaskAC(todoListID, taskID))
    }

    function addTask(todoListID: string, title: string) {
        dispatch(addTaskAC(todoListID, title))
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
        dispatch(changeTaskStatusAC(todoListID, taskId, isDone))
    }

    function changeFilter(todoListID: string, newFilter: FilterValuesType) {
        dispatch(changeTodoListFilterAC(todoListID, newFilter))
    }

    function removeTodoListHandler(todoListID: string) {
        dispatch(removeTodoListAC(todoListID))
    }

    function updateTask(todoListID: string, taskId: string, newTitle: string) {
        dispatch(changeTaskTitleAC(todoListID, taskId, newTitle))
    }

    function updateTodoList(todoListID: string, newTitle: string) {
        dispatch(changeTodoListTitleAC(todoListID, newTitle))
    }


    return (<div className="App">
            <ButtonAppBar/>
            <Container fixed style={{padding: '20px'}}>
                <Grid container style={{padding: '20px'}}>
                    <AddItemForm callback={addTodoList}/>
                </Grid>

                <Grid container spacing={3}>
                    {toDoLists.map((el) => {

                            let tasksForTodolist = tasks[el.id];
                            if (el.filter === "active") {
                                tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
                            }
                            if (el.filter === "completed") {
                                tasksForTodolist = tasks[el.id].filter(t => t.isDone);
                            }

                            return (<Grid key={el.id} item>
                                    <Paper style={{padding: '13px'}} elevation={3}>
                                        <Todolist
                                            key={el.id}
                                            todoListID={el.id}
                                            title={el.title}
                                            tasks={tasksForTodolist}
                                            removeTask={removeTask}
                                            changeFilter={changeFilter}
                                            addTask={addTask}
                                            changeTaskStatus={changeStatus}
                                            filter={el.filter}
                                            removeTodoListHandler={removeTodoListHandler}
                                            updateTask={updateTask}
                                            updateTodoList={updateTodoList}
                                        />
                                    </Paper>
                                </Grid>

                            )
                        }
                    )}
                </Grid>
            </Container>


        </div>
    );
}

export default AppWithRedux;
