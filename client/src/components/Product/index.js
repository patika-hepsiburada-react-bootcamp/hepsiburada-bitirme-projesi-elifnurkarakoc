import React from "react";

const Product = ({
  id,
  name,
  image,
  brand,
  color,
  price,
  createdDate,
  discountPercentage,
}) => {
  return (
    <div>
      {id}
      {name}
      {image}
      {brand}
      {color}
      {price}
      {createdDate}
      {discountPercentage}
    </div>
  );
};

export default Product;
