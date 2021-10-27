function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

function generateProducts() {
  const productNames = [
    "Apple iPhone 11 Pro Max",
    "Apple iPhone 11",
    "Apple iPhone 11 Pro",
    "Samsung S20",
    "Xiamio Redmi Note 9",
  ];
  const productCategory = "Telefon";
  const productColors = [
    "Siyah",
    "Beyaz",
    "Kırmızı",
    "Mavi",
    "Lacivert",
    "Mor",
    "Sarı",
  ];
  const productImages = [
    "https://www.resim.io/i/dQB6m.png",
    "https://www.resim.io/i/dIifW.png",
    "https://www.resim.io/i/dQ8kC.png",
    "https://www.resim.io/i/dQohA.png",
  ];
  const productBrands = [
    "Apple",
    "Samsung",
    "Xiamio",
    "Nokia",
    "LG",
    "General Mobile",
  ];
  const products = [];

  for (var i = 0; i < 36; i++) {
    const id = i;
    const color = productColors[getRandomInt(0, productColors.length - 1)];
    const title = productNames[getRandomInt(0, productNames.length - 1)];
    const image = productImages[getRandomInt(0, productImages.length - 1)];
    const brand = productBrands[getRandomInt(0, productBrands.length - 1)];
    const price = getRandomInt(1000, 10000);
    const discountPercentage = getRandomInt(0, 50);
    const discountPrice = (price - (price * discountPercentage) / 100).toFixed(
      2
    );
    const createdDate = randomDate(new Date(2020, 1, 1), new Date());
    products.push({
      id: id,
      title: title,
      image: image,
      category: productCategory,
      color:color,
      brand: brand,
      price: price,
      discountPrice: discountPrice,
      discountPercentage: discountPercentage,
      createdDate: createdDate,
    });
  }
  return products;
}
module.exports = {
  generateProducts,
};
