import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  let foodItems = ["Dal", "vegetables", "Roti", "Slad", "Milk"];

  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ul class="list-group">
        {foodItems.map((items) => (
          <li class="list-group-item">{items}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
