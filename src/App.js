import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Component/home";
import { About } from "./Component/about";
// import Car from './person';

// let data = {
//   name: "Deven",
//   Age: 22
// }

// let cars = [
//   {  id:1, brand: "FORD" },
//   { id:2, brand: "Ferrari"},
//   { id:3, brand: "Volvo"}
// ]

function App() {
  // const [inputs ,setInputs] = useState("");

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setInputs(previousValues => ({...previousValues, [name]: [value]}))
  // }

  // const handleSubmit = () => {
  //   console.log(`username = ${inputs.username} \nage = ${inputs.age}`);
  //   alert(`username = ${inputs.username} \nage=${inputs.age}`);
  // }

  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>

    // <div className="App">
    //   <h1>Hello there</h1>

     // {/* <label htmlFor="">Enter your Name:  
      //  <input 
    //    name="username"
        // onChange={handleChange}
        // value={inputs.username || ""}
        // type="text"/>
      // </label>

      // <label htmlFor="">Enter your Age:  
        // <input 
        // name="age"
        // onChange={handleChange}
        // value={inputs.age || ""}
        // type="text"/>
      // </label>

      // <button onClick={handleSubmit}>Submit</button> */}

      // {/* <Car /> */}
      // {/* <Car name={data.name} age={data.Age} /> */}
      // {/* <ul>
        // {cars.map((car) => <Car key={car.id} brand={car.brand}/>)}
      // </ul> */}
      // {/* <p>Name: {data.name}</p>
      // <p>Age: {data.Age}</p> */}
    // </div>
  );
}

export default App;
