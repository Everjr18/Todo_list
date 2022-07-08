import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

// import './App.css';
const todo =[
  {text: 'Learn React', completed: false},
  {text: 'study at platzi', completed: false},
  {text: 'go to sleep', completed: false},
]

function App() {
  return (
  <React.Fragment>
      <TodoCounter />
    

  <TodoSearch />
    

    <TodoList >  
      {todo.map(todos => (
        <TodoItem key={todos.text}text={todos.text} />
      ))}
    </TodoList>
    
    <CreateTodoButton />
    
  </React.Fragment>
  );
}

export default App;
