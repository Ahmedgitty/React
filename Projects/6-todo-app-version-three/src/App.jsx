import AddTodo from "./Components/AddTodo";
import AppName from "./Components/AppName";
import "./App.css";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItems from "./Components/TodoItems";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
  
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContextProvider>
  );
}
//yes just like 
export default App;
