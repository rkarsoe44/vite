import React from "react";
import Navbar from "./Navbar";
import "./App.css";
import Product from "./Product";
// import Card from "./Card";
const App = () => {
 
  return (
    <React.Fragment>
      <div className=" container">
        <Navbar />
        <div className=" d-flex justify-content-between mt-5">
          <Product />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
