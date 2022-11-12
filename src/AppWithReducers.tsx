// import React, {useReducer} from 'react';
import './App.css';
// import {Todolist} from './Todolist';
// import {v1} from 'uuid';
// import AddItemForm from "./components/AddItemForm";
// import ButtonAppBar from "./components/AppBar";
// import {Container, Grid, Paper} from "@mui/material";
// import {addTaskAC, changeTaskStatusAC, changeTaskTitleAC, removeTaskAC, taskReducer} from "./state/taskReducer";
// import {addTodoListAC, changeTodoListFilterAC, changeTodoListTitleAC, removeTodoListAC, todoListsReducer} from "./state/toDoListReducer";
//
// export type TodoListsType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// function AppWithReducers() {
//
//     let todolistID1 = v1();
//     let todolistID2 = v1();
//
//     let [toDoLists, dispatchToToDoLists] = useReducer(todoListsReducer, [
//         {id: todolistID1, title: 'What to learn', filter: 'all'},
//         {id: todolistID2, title: 'What to buy', filter: 'all'},
//     ])
//
//     let [tasks, dispatchToTasks] = useReducer(taskReducer, {
//         [todolistID1]: [
//             {id: v1(), title: "HTML&CSS", isDone: true},
//             {id: v1(), title: "JS", isDone: true},
//             {id: v1(), title: "ReactJS", isDone: false},
//             {id: v1(), title: "Rest API", isDone: false},
//             {id: v1(), title: "GraphQL", isDone: false},
//         ],
//         [todolistID2]: [
//             {id: v1(), title: "HTML&CSS2", isDone: true},
//             {id: v1(), title: "JS2", isDone: true},
//             {id: v1(), title: "ReactJS2", isDone: false},
//             {id: v1(), title: "Rest API2", isDone: false},
//             {id: v1(), title: "GraphQL2", isDone: false},
//         ]
//     });
//
//     function addTodoList(newTitle: string) {
//         let action = addTodoListAC(newTitle)
//
//         dispatchToToDoLists(action)
//         dispatchToTasks(action)
//     }
//
//     function removeTask(todoListID: string, taskID: string) {
//         dispatchToTasks(removeTaskAC(todoListID, taskID))
//     }
//
//     function addTask(todoListID: string, title: string) {
//         dispatchToTasks(addTaskAC(todoListID, title))
//     }
//
//     function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
//         dispatchToTasks(changeTaskStatusAC(todoListID, taskId, isDone))
//     }
//
//     function changeFilter(todoListID: string, newFilter: FilterValuesType) {
//         dispatchToToDoLists(changeTodoListFilterAC(todoListID, newFilter))
//     }
//
//     function removeTodoListHandler(todoListID: string) {
//         let action = removeTodoListAC(todoListID)
//
//         dispatchToToDoLists(action)
//         dispatchToTasks(action)
//     }
//
//     function updateTask(todoListID: string, taskId: string, newTitle: string) {
//         dispatchToTasks(changeTaskTitleAC(todoListID, taskId, newTitle))
//     }
//
//     function updateTodoList(todoListID: string, newTitle: string) {
//         dispatchToToDoLists(changeTodoListTitleAC(todoListID, newTitle))
//     }
//
//
//     return (<div className="App">
//             <ButtonAppBar/>
//             <Container fixed style={{padding: '20px'}}>
//                 <Grid container style={{padding: '20px'}}>
//                     <AddItemForm callback={addTodoList}/>
//                 </Grid>
//
//                 <Grid container spacing={3}>
//                     {toDoLists.map((el) => {
//
//                             let tasksForTodolist = tasks[el.id];
//                             if (el.filter === "active") {
//                                 tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
//                             }
//                             if (el.filter === "completed") {
//                                 tasksForTodolist = tasks[el.id].filter(t => t.isDone);
//                             }
//
//                             return (<Grid key={el.id} item>
//                                     <Paper style={{padding: '13px'}} elevation={3}>
//                                         <Todolist
//                                             key={el.id}
//                                             todoListID={el.id}
//                                             title={el.title}
//                                             tasks={tasksForTodolist}
//                                             removeTask={removeTask}
//                                             changeFilter={changeFilter}
//                                             addTask={addTask}
//                                             changeTaskStatus={changeStatus}
//                                             filter={el.filter}
//                                             removeTodoListHandler={removeTodoListHandler}
//                                             updateTask={updateTask}
//                                             updateTodoList={updateTodoList}
//                                         />
//                                     </Paper>
//                                 </Grid>
//
//                             )
//                         }
//                     )}
//                 </Grid>
//             </Container>
//
//
//         </div>
//     );
// }
//
// export default AppWithReducers;
