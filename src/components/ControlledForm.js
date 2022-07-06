import React, { useState, useEffect } from "react";

export default function ControlledForm() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");
  console.log(name, age);
  useEffect(() => {
    //we can control the state of the form
  }, [name]);

  return (
    <form>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(+e.target.value)}
      />
      <input
        type="text"
        name="hairColor"
        placeholder="Hair Color"
        value={hairColor}
        onChange={(e) => setHairColor(e.target.value)}
      />
      <button type="button">Submit</button>
    </form>
  );
}
