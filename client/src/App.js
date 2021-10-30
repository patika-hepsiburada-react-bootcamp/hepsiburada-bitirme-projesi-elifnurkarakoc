import React from "react";
import { Container, Header, Content, Footer } from "layouts";
import { useSelector } from "react-redux";
import { Modal } from "components";

function App() {
  const { isModal } = useSelector((state) => state.basket);
  return (
    <Container data-testid="container">
      <Header data-testid="header"/>
      <Content data-testid="content" />
      <Footer data-testid="footer"/>
      {isModal && <Modal data-testid="modal" />}
    </Container>
  );
}

export default App;
