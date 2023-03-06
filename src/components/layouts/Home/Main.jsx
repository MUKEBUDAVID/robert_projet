import React from "react";
import styled from "styled-components";
import Speg from "../../atoms/Speg";
import BenLeft from "../../atoms/BenLeft";
import Services from "../../atoms/Services";
import BenRight from "../../atoms/BenRight";
import Faq from "../../atoms/Faq";

const Maine = styled.main`
  width: 100vw;
  height: 1942px;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Ben = styled.div`
  width: 100%;
  height: 550px;
  /* background-color:green; */
  display: flex;
  flex-direction: row;
  margin-top: 30px;
`;

const Main = () => {
  return (
    <Maine>
      <Speg />
      <Ben>
        <BenLeft />
        <BenRight />
      </Ben>

      <Services />

      <Faq />
    </Maine>
  );
};

export default Main;
