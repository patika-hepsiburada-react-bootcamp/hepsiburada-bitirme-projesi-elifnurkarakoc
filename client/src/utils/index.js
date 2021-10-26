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
