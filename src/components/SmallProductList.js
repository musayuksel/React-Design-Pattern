import React from "react";

export default function SmallProductList({ product }) {
  const { name, price } = product;
  return (
    <h3>
      {name} - {price}
    </h3>
  );
}
