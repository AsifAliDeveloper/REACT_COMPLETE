import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  // let foodItems = ["Dal", "vegetables", "Roti", "Slad", "Milk", "Ghee"];
  let foodItems = [];
  if (foodItems.length === 0) {
    return <h3>I am Still hungray.</h3>;
  }

  return (
    <React.Fragment>
      <h1>Healthy Foods</h1>
      <ul className="list-group">
        {foodItems.map((items) => (
          <li key={items} className="list-group-item">
            {items}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
