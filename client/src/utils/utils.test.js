import {
  getCountProperty,
  filterSelectedKeyProducts,
  sortFn,
  updateProductsSort,
  getBasketDataFromLocalStorage,
  setBasketDataToLocalStorage,

} from "utils";

var items = [
  {
    id: 55,
    title: "Apple iPhone 11",
    image: "https://www.resim.io/i/dQB6m.png",
    category: "Telefon",
    brand: "Xiamio",
    color: "Siyah",
    price: 1550,
    discountPrice: "1519.00",
    discountPercentage: 2,
    createdDate: "2020-03-05T16:01:38.049Z",
  },
  {
    id: 56,
    title: "Apple iPhone 11",
    image: "https://www.resim.io/i/dQB6m.png",
    category: "Telefon",
    color: "Siyah",
    brand: "Apple",
    price: 2000,
    discountPrice: "1800.00",
    discountPercentage: 10,
    createdDate: "2020-03-05T16:01:38.049Z",
  },
];
//{ color: "Siyah", brand: "Xiamio" };//aşağıdkaiyi yapıyı bu hale getirirsem daha iyi olur.
var selectedKeys = [
  ["color", "Siyah"],
  ["brand", "Xiamio"],
];

describe("utils function test", () => {
  test("getCountProperty", () => {
    var responseBrand = getCountProperty(items, "brand");
    expect(responseBrand).toEqual({ Xiamio: 1, Apple: 1 });
    var responseColor = getCountProperty(items, "color");
    expect(responseColor).toEqual({ Siyah: 2 });
  });
  test("filterSelectedKeyProducts function test", () => {
    var response = filterSelectedKeyProducts(items, selectedKeys);
    expect(response).toEqual([
      {
        brand: "Xiamio",
        category: "Telefon",
        color: "Siyah",
        createdDate: "2020-03-05T16:01:38.049Z",
        discountPercentage: 2,
        discountPrice: "1519.00",
        id: 55,
        image: "https://www.resim.io/i/dQB6m.png",
        price: 1550,
        title: "Apple iPhone 11",
      },
    ]);
  });
  test("sortFn ", () => {
    var response = sortFn("xiamio", "apple");
    expect(response).toEqual(1);
  });
  test("updateProductsSort latest_desc", () => {
    var sortValue = "latest_desc";
    var response = updateProductsSort(items, sortValue);
    console.log(response);
    expect(response).toEqual(items);
  });
  test("updateProductsSort price_desc", () => {
    var sortValue = "price_desc";
    var response = updateProductsSort(items, sortValue);
    console.log(response);
    expect(response).toEqual(items.reverse());
  });
  test("setBasketDataToLocalStorage & getBasketDataFromLocalStorage",()=>{
    setBasketDataToLocalStorage(items);
    var response = getBasketDataFromLocalStorage();
    expect(response).toEqual(items);
    localStorage.removeItem('cartItems');
  });
});
