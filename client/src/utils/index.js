export const getCountProperty = (items, propertyName) => {
  var result = {};
  if (items) {
    items.forEach((index) =>
      !Object.prototype.hasOwnProperty.call(result, index[propertyName])
        ? (result[index[propertyName]] = 1)
        : (result[index[propertyName]] += 1)
    );
  }
  return result;
};

export const filterSelectedKeyProducts = (items, selectedKeys) => {
  let temp = [];
  if (selectedKeys.length == 1) {
    temp = items.filter(
      (item) => item[selectedKeys[0][0]] === selectedKeys[0][1]
    );
  }
  if (selectedKeys.length > 1) {
    temp = items.filter(
      (item) =>
        item[selectedKeys[0][0]] === selectedKeys[0][1] &&
        item[selectedKeys[1][0]] === selectedKeys[1][1]
    );
  }
  return temp;
};

export const updateProductsSort = (visibleItems, sortValue) => {
  // console.log({ visibleItems });
  var arrayForSort = [...visibleItems];
  if (sortValue === "price_asc") {
    return arrayForSort.sort((a, b) => a.discountPrice - b.discountPrice);
  } else if (sortValue === "price_desc") {
    return arrayForSort.sort((a, b) => b.discountPrice - a.discountPrice);
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
  // console.log(cartItems);
  return cartItems;
};

export const setBasketDataToLocalStorage = (products) => {
  localStorage.setItem("cartItems", JSON.stringify(products));
};
