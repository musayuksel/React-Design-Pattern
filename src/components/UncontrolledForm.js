import React from "react";

export default function UncontrolledForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {};
    for (let name of formData.keys()) {
      data[name] = formData.get(name);
    }
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="number" name="age" placeholder="Age" />
      <input type="text" name="hairColor" placeholder="Hair Color" />
      <input type="submit" value={"Submit"} />
    </form>
  );
}
