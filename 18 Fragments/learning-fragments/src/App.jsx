import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  let foodItems = ["Dal", "Green Vegetable", "Roti", "Salad", "Milk", "Ghee"];
  let textToShow = "Food item entered by User";
  //let foodItems =[];

  //let emptyMessage= foodItems.length === 0 ? <h3>No food items available</h3> : null

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Foods</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </Container>
  );
}

export default App;
