import './App.css';
import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from "./Component/home";
import { About } from "./Component/about";
import { Navbar } from './Component/Navbar';
import { OrderSummary } from './Component/OrderSummary';
import { NoMatch } from './Component/NoMatch';
import { Products } from './Component/Products';
import { FeaturedProducts } from './Component/FeaturedProducts';
import { NewProducts } from './Component/NewProducts';

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
    <div className='main__element'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary/>} />
        <Route path="*" element={<NoMatch/>} />
        <Route path="products" element={<Products/>}>
          <Route index element={<FeaturedProducts/>} />
          <Route path="featured" element={<FeaturedProducts/>} />
          <Route path="new" element={<NewProducts/>} />
        </Route>
      </Routes>
    </div>
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
