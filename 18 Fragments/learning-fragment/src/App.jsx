import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/foodItems";
import ErrorMessage from "./ErrorMessage";

function App() {
  let foodItems = [
    "Sabzi",
    "Dal",
    "vegetables",
    "Roti",
    "Slad",
    "Milk",
    "Ghee",
  ];

  return (
    <React.Fragment>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
