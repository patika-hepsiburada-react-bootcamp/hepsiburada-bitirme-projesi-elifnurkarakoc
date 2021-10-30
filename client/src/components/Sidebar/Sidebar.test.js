import { fireEvent, render, screen } from "test-utils";
import { Sidebar } from "components";
import { sortValues } from "constants/constants";
import '@testing-library/jest-dom/extend-expect';
var preloadedState = {
  products: {
    items: [
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
        brand: "Xiamio",
        color: "Kırmızı",
        price: 1550,
        discountPrice: "1519.00",
        discountPercentage: 2,
        createdDate: "2020-03-05T16:01:38.049Z",
      },
    ],
    visibleItems: [
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
        brand: "Xiamio",
        color: "Kırmızı",
        price: 1550,
        discountPrice: "1519.00",
        discountPercentage: 2,
        createdDate: "2020-03-05T16:01:38.049Z",
      },
    ],
    colorFilters: {},
    brandFilters: {},
    selectedFilter: [],
    sort: "price_asc",
    searchValue: "",
    loading: false,
    error: null,
    indexOfFirstProducts: 1,
    indexOfLastProducts: 1,
  },
};
const colorFilters = {
  Beyaz: 2,
  Mavi: 2,
  Kırmızı: 1,
  Siyah: 1,
  Mor: 3,
};

const brandFilters = {
  LG: 1,
  Nokia: 1,
  Apple: 1,
};


describe("<Sidebar />", () => {
  test("render <Sidebar /> component with color filter", () => {
    render(
      <Sidebar
        title={"Renk"}
        propertyName={"color"}
        filterValues={colorFilters}
      />,
      { preloadedState: preloadedState }
    );

    expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByText("Siyah (1)")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Siyah (1)"));
  });
  test("render <Sidebar /> component with brand filter", () => {
    render(
      <Sidebar
        title={"Marka"}
        propertyName={"brand"}
        filterValues={brandFilters}
      />
    );
    expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
  });
  test("render <Sidebar /> component with sort filter", () => {
    render(
      <Sidebar
        title={"Sıralama"}
        propertyName={"sort"}
        filterValues={sortValues}
      />
    );
    expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
  });
  test("render <Sidebar /> component with color filter click", () => {
    render(
      <Sidebar
        title={"Sıralama"}
        propertyName={"sort"}
        filterValues={sortValues}
      />
    );
    expect(screen.queryByTestId("sidebar")).toBeInTheDocument();
    expect(screen.getByText("En Düşük Fiyat")).toBeInTheDocument();
    fireEvent.click(screen.getByText("En Düşük Fiyat"));
  });
});
