import React from "react";

export default function RecursiveComponent({ data }) {
  function isObject(obj) {
    return obj !== null && typeof obj === "object";
  }

  // first of all add STOP_RECURSION to the end of the object
  //for each key value pair in the object, call recursive function
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <li>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
}
