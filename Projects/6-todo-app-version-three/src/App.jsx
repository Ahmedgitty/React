import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItems from "./Components/TodoItems";
import { useState } from "react";

function App() {

 /* const intitalTodoItems = [
    { dueDate: "4/10/2024", name: "Buy milk" },
    { dueDate: "4/10/2024", name: "Go To Gym" },
    { dueDate: "4/11/2024", name: "Read a book" },
  ]; */

  const[todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, ItemDueDate) => {
    console.log(`New Item added: ${itemName} Date: ${ItemDueDate}`);
    const newTodoItems = [...todoItems, {name: itemName, dueDate: ItemDueDate}];
    setTodoItems(newTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <AddTodo onNewItem={handleNewItem}/>
      {todoItems.length === 0 && <WelcomeMessage/>}
      <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}/>
      
    </center>
  );
}

export default App;
