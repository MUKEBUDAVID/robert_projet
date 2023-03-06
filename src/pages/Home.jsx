import React from "react";
import styled from "styled-components";
import Header from "../components/layouts/Home/Header";
import Main from "../components/layouts/Home/Main";
import Footer from "../components/layouts/Home/Footer";

const Accuil = styled.div`
  width: 100vw;
  height: 450vh;
`;

const Home = () => {
  return (
    <Accuil>
      <Header />
      <Main />
      <Footer />
    </Accuil>
  );
};

export default Home;
