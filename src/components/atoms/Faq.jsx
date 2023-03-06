import React from "react";
import solei from "../../assets/Group (1).svg";
import akar from "../../assets/akar-icons_water.svg";
import charm from "../../assets/charm_plant-pot.svg";
import tabler from "../../assets/tabler_temperature.svg";
import unsplash from "../../assets/unsplash_sEApBUS4fIk.jpg";
import styled from "styled-components";

const Fonction = styled.section`
  width: 100vw;
  height: 500px;
  /* background-color: darkgray; */
  display: flex;
  flex-direction: row;
`;

const Left = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    margin-right: 190px;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 75px;
    text-transform: uppercase;

    /* font */

    color: #081323;
  }
  ul {
    width: 70%;
    height: 80%;
    /* background-color: forestgreen; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  li {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    height: inherit;

    img {
      width: 50px;
      height: 50px;
    }
    p {
      width: 80%;
      height: inherit;
    }
    h2 {
      margin-bottom: 10px;
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 2vw;
      line-height: 38px;
      /* identical to box height */

      color: #000000;
    }
    span {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 400;
      font-size: 1vw;
      line-height: 17px;

      /* Gray 2 */

      color: #4f4f4f;
    }
  }
`;

const Rigth = styled.div`
  width: 50%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 55%;
    height: 70%;
    border-radius: 50px;
  }
`;
const Faq = () => {
  return (
    <Fonction>
      <Left>
        <h1>les fonctions ou faq</h1>

        <ul>
          <li key={"A1M"}>
            <img src={solei} alt="icon_solei" />{" "}
            <p>
              <h2>Adjust Lighting</h2>{" "}
              <span>
                When caring for indoor plants, make sure the room temperature is
                neither too cold nor too hot
              </span>
            </p>
          </li>

          <li key={"A2M"}>
            <img src={akar} alt="icon_water" />{" "}
            <p>
              <h2>Don't water too often</h2>{" "}
              <span>
                When caring for indoor plants, make sure the room temperature is
                neither too cold nor too hot
              </span>
            </p>
          </li>

          <li key={"A3M"}>
            <img src={charm} alt="icon_plant" />{" "}
            <p>
              <h2>Don't water too often</h2>{" "}
              <span>
                When caring for indoor plants, make sure the room temperature is
                neither too cold nor too hot
              </span>
            </p>
          </li>

          <li key={"A4M"}>
            <img src={tabler} alt="icon_temperature" />{" "}
            <p>
              <h2>Fertilize regularly</h2>{" "}
              <span>
                When caring for indoor plants, make sure the room temperature is
                neither too cold nor too hot
              </span>
            </p>
          </li>
        </ul>
      </Left>

      <Rigth>
        <img src={unsplash} alt="icon_sun" />
      </Rigth>
    </Fonction>
  );
};

export default Faq;
