import { Product } from "components";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductAsync } from "redux/slices/ProductSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProductAsync());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    <div>Error: {error}</div>;
  }
 
  return (
    <div>
      {items.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductList;
