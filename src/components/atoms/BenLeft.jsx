import React from "react";
import styled from "styled-components";
import solei from "../../assets/Group (1).svg";
import akar from "../../assets/akar-icons_water.svg";
import charm from "../../assets/charm_plant-pot.svg";
import tabler from "../../assets/tabler_temperature.svg";

const Benleft = styled.section`
  width: 50%;
  height: 550px;
  display: flex;
  justify-content: center;
  align-items: center;

  
`;

const Ul = styled.ul`
  list-style: none;
`;
const List = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  height: 100px;
  /* background-color: chocolate; */

  img {
    width: 58px;
    height: 58px;
  }
`;
const Paragraph = styled.p`
  width: 500px;
  height: inherit;
  /* background-color: royalblue; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left:20px;

  span:nth-child(1) {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 38px;
    color: #000000;
  }
  span:nth-child(2) {
    width: 250px;
    line-height: 15px;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 0.8vw;
    color: #4f4f4f;
  }
`;
const BenLeft = () => {
  return (
    <Benleft>
      <Ul>
        <List>
          <img src={solei} alt="logo_solei" />{" "}
          <Paragraph>
            <span>Adjust Lighting</span>{" "}
            <span>
              When caring for indoor plants, make sure the room temperature is
              neither too cold nor too hot
            </span>
          </Paragraph>
        </List>

        <List>
          <img src={akar} alt="logo_eau" />{" "}
          <Paragraph>
            <span>Don't water too often</span>
            <span>
              Watering ornamental plants indoors does not have to be done every
              day.
            </span>
          </Paragraph>
        </List>

        <List>
          <img src={charm} alt="logo_fleure" />{" "}
          <Paragraph>
            <span>Don't water too often</span>
            <span>
              Watering ornamental plants indoors does not have to be done every
              day.
            </span>
          </Paragraph>
        </List>

        <List>
          <img src={tabler} alt="logo_termo" />{" "}
          <Paragraph>
            <span>Fertilize regularly</span>
            <span>
              The nutrients most indoor houseplants need are nitrogen for
              balance and potassium for stem strength
            </span>
          </Paragraph>
        </List>
      </Ul>
    </Benleft>
  );
};

export default BenLeft;
