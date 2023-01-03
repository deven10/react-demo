import React, { useRef, useState } from 'react';


function Car() {
    const [inputs, setInputs] = useState("");
    // const refName = useRef("");

    const handleChange = (event) => {
      const {name, value} = event.target;
      // const value = event.target.value;
      setInputs(previousValues => ({...previousValues, [name]: [value]}))
    }

    const handleSubmit = () => {
      alert("username = " + inputs.username +"\n age = " + inputs.age);
      // console.log(`username = ${inputs.username} age = ${inputs.age}`)
    }
    
  return (
        <form action="submit" onSubmit={handleSubmit}>
            {/* <div> */}
              {/* <input type="text" ref={refName}/> */}
              <label htmlFor="">Enter your name: 
                <input 
                type="text" 
                name='username' 
                value={inputs.username || ""} 
                onChange={handleChange} />
              </label>

              <label htmlFor="">Enter your age: 
                <input 
                type="number" 
                name='age' 
                value={inputs.age || ""} 
                onChange={handleChange} />
              </label>

              <input type="submit" />
              {/* <button onClick={handleSubmit}>Submit</button> */}
            {/* </div> */}
        </form>
  )
}

export default Car;