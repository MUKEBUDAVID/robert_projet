import React from "react";
import styled from "styled-components";
import carre from "../../assets/Group.svg";
import casque from "../../assets/casque.svg";
import porte from "../../assets/porte.svg";

const Spege = styled.div`
  width: 80vw;
  height: 100px;
  /* background-color: yellow; */
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Div = styled.div`
  width: 20vw;
  height: 50px;
  /* background-color: blue; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Para = styled.p`

  width: 15vw;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* background-color: violet; */

  span:nth-child(1) {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.2vw;
    color: #081323;
  }

  span:nth-child(2) {
    margin-top: 5px;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    color: #828282;
  }
`;
const Speg = () => {
  return (
    <Spege>
      <Div>
        <img src={carre} alt="logo" />{" "}
        <Para>
          {" "}
          <span>Devis Gratuits</span> <span>Aucun frais pour chaque devis</span>{" "}
        </Para>{" "}
      </Div>

      <Div>
        <img src={casque} alt="logo" />{" "}
        <Para>
          {" "}
          <span>Paiement électronique</span> <span>paiement 100% sécurisé</span>{" "}
        </Para>
      </Div>

      <Div>
        <img src={porte} alt="logo" />{" "}
        <Para>
          {" "}
          <span>24/7 Support</span> <span>Assistance en ligne</span>{" "}
        </Para>
      </Div>
    </Spege>
  );
};

export default Speg;
