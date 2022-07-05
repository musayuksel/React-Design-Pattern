import React from "react";

export default function SmallPersonList({ person }) {
  const { name, age } = person;
  return (
    <p>
      Name: {name}, Age: {age} years!
    </p>
  );
}
