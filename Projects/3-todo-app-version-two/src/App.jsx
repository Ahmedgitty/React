import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import TodoItems from "./Components/TodoItems";

function App() {

  const todoItems = [
    { dueDate: "4/10/2024", name: "Buy milk" },
    { dueDate: "4/10/2024", name: "Go To Gym" },
    { dueDate: "4/11/2024", name: "Read a book" },
  ];


  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItems}/>
      
    </center>
  );
}

export default App;
