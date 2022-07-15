import React from "react";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";
import { Header } from "./Header";
import { ProgressCircle } from "./ProgressCircle";

// import './App.css';
const todo =[
  {text:'things to do', completed: 1},
  {text: 'Learn React', completed: false},
  {text: 'study at platzi', completed: false},
  {text: 'go to sleep', completed: false},
]

function App() {
  return (
  <React.Fragment>
    <Header />
    
    <ProgressCircle size={200} 
    strokeWidth={40}
    percentage={70}
    color="white"
    />
    

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
