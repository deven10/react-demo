import React, { useState } from 'react';


function Person() {
    const [age, setAge] = useState("");

    const handleSubmit = () => {
        if(age >= 18){
        alert(`You can vote`);
        } else {
            alert(`You cannot vote`);
        }
    }
    
  return (
    <div>
        <form action="submit" onSubmit={handleSubmit}>
            <label htmlFor="">Enter your age: </label>
            <input type="text" onChange={(e) => setAge(e.target.value)} value={age}/>
            <input type="submit" />
        </form>
    </div>
  )
}

export default Person;