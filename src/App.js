import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Info from './components/Info';
import Todolist from './components/Todolist';
import React from 'react';

function App() {
  const[todo,setTodo]=React.useState([]);
  const completed=todo.filter(task=>task.is_completed).length;
  const total_todo=todo.length;
  return (
    <>
    <Header/>
    <Info todo_completed={completed} total_todo={total_todo}/>
    <Form setTodo={setTodo}/>
    <Todolist todos={todo} setTodos={setTodo}/>
    </>
  );
}

export default App;
