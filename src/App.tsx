import React from 'react';
// import './App.css';



//
// export type TodoListsType = {
//     id: string
//     title: string
//     filter: FilterValuesType
// }
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// function App() {
//
//     let todolistID1 = v1();
//     let todolistID2 = v1();
//
//     let [toDoLists, setToDoLists] = useState<Array<TodoListsType>>([
//         {id: todolistID1, title: 'What to learn', filter: 'all'},
//         {id: todolistID2, title: 'What to buy', filter: 'all'},
//     ])
//
//     let [tasks, setTasks] = useState({
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
//         const newTodoListId = v1()
//         const newTodoList: TodoListsType = {id: newTodoListId, title: newTitle, filter: 'all'}
//         setToDoLists([newTodoList, ...toDoLists])
//         setTasks({...tasks, [newTodoListId]: []})
//     }
//
//     function removeTask(todoListID: string, taskID: string) {
//         setTasks({...tasks, [todoListID]: tasks[todoListID].filter(el => el.id !== taskID)})
//     }
//
//     function addTask(todoListID: string, title: string) {
//         let newTask = {id: v1(), title: title, isDone: false};
//         setTasks({...tasks, [todoListID]: [...tasks[todoListID], newTask]})
//         console.log(tasks)
//     }
//
//     function changeStatus(todoListID: string, taskId: string, isDone: boolean) {
//         setTasks({...tasks, [todoListID]: tasks[todoListID].map(el => el.id === taskId ? {...el, isDone: isDone} : el)})
//     }
//
//     function changeFilter(todoListID: string, value: FilterValuesType) {
//         setToDoLists(toDoLists.map(el => el.id === todoListID ? {...el, filter: value} : el));
//     }
//
//     function removeTodoListHandler(todoListID: string) {
//         setToDoLists(toDoLists.filter(el => el.id !== todoListID))
//         delete tasks[todoListID]
//     }
//
//     function updateTask(todoListID: string, taskId: string, newTitle: string) {
//         setTasks({
//             ...tasks,
//             [todoListID]: tasks[todoListID].map(el => el.id === taskId ? {...el, title: newTitle} : el)
//         })
//     }
//
//     function updateTodoList(todoListID: string, newTitle: string) {
//         setToDoLists(toDoLists.map(el => el.id === todoListID ? {...el, title: newTitle} : el))
//
//         console.log(toDoLists)
//         console.log(newTitle)
//         console.log(todoListID)
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
// export default App;
