import "./App.css";
import React from "react";
import { Container, Header, Content, Footer } from "layouts";
import { useSelector } from "react-redux";
import { Modal } from "components";

function App() {
  const { isModal } = useSelector((state) => state.cart);
  return (
    <Container>
      <Header />
      <Content />
      <Footer/>
      {isModal && <Modal />}
    </Container>
  );
}

export default App;
