export const getCountProperty = (items, propertyName) => {
  var result = {};
  items.forEach((index) =>
    !Object.prototype.hasOwnProperty.call(result, index[propertyName])
      ? (result[index[propertyName]] = 1)
      : (result[index[propertyName]] += 1)
  );
  return result;
  //   console.log(result);
};

// export const filterProducts = (items, propertyName, filterValue) => {
//   let filteredProducts = [];
//   filteredProducts = items.filter((item) => item[propertyName] === filterValue);
//   console.log(filteredProducts);
//   return filteredProducts;
// };

export const filterSelectedKeyProducts = (items, selectedKeys) => {
  let temp = [];
  //   console.log(selectedKeys);
  if (selectedKeys.length >= 1) {
    temp = items.filter(
      (item) => item[selectedKeys[0][0]] === selectedKeys[0][1]
    );
    // console.log("temp", temp);
  }
  if (selectedKeys.length > 1) {
    temp = temp.filter(
      (item) => item[selectedKeys[1][0]] === selectedKeys[1][1]
    );
    // console.log("filteredItems", temp);
  }
  return temp;
};

export const updateProductsSort = (visibleItems, sortValue) => {
  console.log({ visibleItems });
  var arrayForSort = [...visibleItems];
  if (sortValue === "price_asc") {
    return arrayForSort.sort((a, b) => a.price - b.price);
  } else if (sortValue === "price_desc") {
    return arrayForSort.sort((a, b) => b.price - a.price);
  } else if (sortValue === "latest_asc") {
    return arrayForSort.sort(
      (a, b) => new Date(a.createdDate) - new Date(b.createdDate)
    );
  } else if (sortValue === "latest_desc") {
    return arrayForSort.sort(
      (a, b) => new Date(b.createdDate) - new Date(a.createdDate)
    );
  }
  return visibleItems;
};

export const getBasketDataFromLocalStorage = () => {
  const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  if (!cartItems) {
    return [];
  }
  console.log(cartItems);
  return cartItems;
};

export const setBasketDataToLocalStorage = (products) => {
  localStorage.setItem("cartItems", JSON.stringify(products));
};
