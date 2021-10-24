import axios from "axios";

export const fetchProducts = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_BASE_ENDPOINT}/products`
  );
  return data;
};
