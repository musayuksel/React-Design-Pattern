import React from "react";

export default function LargeProductList({ product }) {
  const { name, price, description, rating } = product;
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <h3>Description:</h3>
      <p>{description}</p>
      <p>Avarage Rating: {rating}</p>
    </>
  );
}
