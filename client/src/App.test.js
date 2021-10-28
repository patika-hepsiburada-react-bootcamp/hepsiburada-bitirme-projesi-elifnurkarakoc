import { render, screen } from "test-utils";
import App from "./App";
const preloadedState={
    basket:{
        isModal:false
    }
};
const testIsModal={
    basket:{
        isModal:true
    }
};
describe('<App />', () => {
    test('render <App /> component', () => {
        render(<App />,{preloadedState:preloadedState});
        expect(screen.queryByTestId("container")).toBeDefined();
        expect(screen.queryByTestId("header")).toBeDefined();
        expect(screen.queryByTestId("content")).toBeDefined();
        expect(screen.queryByTestId("footer")).toBeDefined();
        expect(screen.queryByTestId("modal")).toBeNull();
    });
    test('isModal equals true', () => {
        render(<App />,{preloadedState:testIsModal});
        expect(screen.queryByTestId("container")).toBeDefined();
        expect(screen.queryByTestId("header")).toBeDefined();
        expect(screen.queryByTestId("content")).toBeDefined();
        expect(screen.queryByTestId("footer")).toBeDefined();
        expect(screen.queryByTestId("modal")).toBeDefined();
    });  
});
