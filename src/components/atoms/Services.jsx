import React from "react";
import styled from "styled-components";
import jest from "../../assets/jeshoots-com-sMKUYIasyDM-unsplash.jpg";
import rectangle from "../../assets/Rectangle 10.jpg";
import rectangle_1 from "../../assets/Rectangle 13.jpg";
import jeson from "../../assets/jason-goodman-vbxyFxlgpjM-unsplash.jpg";
import nice from "../../assets/nice.jpg";
import rectangle_15 from "../../assets/Rectangle 15.jpg";
import { NavLink } from "react-router-dom";

const Serve = styled.section`
  width: 100vw;
  height: 725px;
  background: linear-gradient(180deg, #4b5bf9 55.21%, rgba(129, 247, 218, 0) 98.11%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  /* border:10px black solid; */

  h1 {
    margin-top: 20px;
    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 84px;
    text-align: center;

    color: #ffffff;
  }
  h1:hover {
    text-decoration: underline;
  }
`;
const Central = styled.div`
  width: 100vw;
  height: 630px;
  /* background-color: wheat; */
  margin-top: 25px;

  div {
    width: 100vw;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  

`;
const Aside=styled(NavLink)`
 
    width: 297px;
    height: 251px;
    border-radius: 57px;
    /* background-color: black; */
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  
  & img {
    width: 100%;
    height: 100%;
    border-radius: 57px;
  }
  & span {
    position: absolute;
    width: 70%;
    height: 25%;
    border: 10px solid rgba(231, 220, 220, 0.86);
    border-radius: 69px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: "JetBrains Mono";
    font-style: normal;
    font-weight: 500;
    font-size: 1vw;
    text-align: center;

    color: #f0f0f6;
    overflow:hidden;
    z-index: 1;
    
  }
  & span::before {
    content:"";
    position: absolute;
    width: 100%;
    height: 100%;
    /* border: 10px solid rgba(231, 220, 220, 0.86); */
    border-radius: 69px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:rgba(231, 220, 220, 0.86);
    transition: 0.5s ease all;
     left:-190px;
     z-index: -1;
  }
  & span:hover::before{
    transform: translateX(190px)

  }
  & span:hover {
      color:transparent;
    }
  
`
const Services = () => {
  return (
    <Serve>
      <h1>Services</h1>

      <Central>
        <div>
          <Aside to="/Service" title="Click">
            <img src={jest} alt="image_maitenances" />
            <span>Maitenannces</span>
          </Aside>

          <Aside to="/Service" title="Click">
            <img src={rectangle} alt="image_installation" />
            <span>Installation et configuration</span>
          </Aside>

          <Aside to="/Service" title="Click">
            <img src={rectangle_1} alt="image_webmaster" />
            <span>Webmsater</span>
          </Aside>
        </div>

        <div>
          <Aside to="/Service" title="Click">
            <img src={jeson} alt="image_consultation" />
            <span>consultation</span>
          </Aside>

          <Aside to="/Service" title="Click">
            <img src={nice} alt="image_sous_traitances" />
            <span>sous traitances</span>
          </Aside>

          <Aside to="/Service" title="Click">
            <img src={rectangle_15} alt="image_BD" />
            <span>Base de donnne</span>
          </Aside>
        </div>
      </Central>
    </Serve>
  );
};

export default Services;
