import React from "react";
import Navigation from "../../atoms/Navigation";
import ImageHome from "../../../assets/home.jpg";
import styled from "styled-components";
import icon from "../../../assets/hover-product.svg";

const Headero = styled.header`
  background-image: url("${ImageHome}");
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 750px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .euro_banner {
    width: 74vw;
    height: 200px;
    /* background-color: red; */
    font-family: "Vampiro One", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 5vw;
    line-height: 80px;
    text-align: center;
    margin-top: 70px;
    color: white;

    span {
      color: #de6948;
    }
  }

  p {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    width: 500px;
    height: 100px;
    /* background-color:red; */
  }
  .icon1 {
    position: absolute;
    position: absolute;
    left: 13px;
    top: 100px;
  }

  .icon2 {
    position: absolute;
    position: absolute;
    left: 200px;
    top: 500px;
  }
  .icon3 {
    position: absolute;
    left: 1000px;
    top: 421px;
  }
`;
const Flou = styled.div`
  width: 100vw;
  height: 90px;
  position: absolute;
  top: 660px;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    #ffffff 83.65%
  );
  position: absolute;
`;

const color ={
  left:"white",
  right:"white"
}


const Header = () => {
  return (
    <Headero>
      <Navigation color={color} />
      <section className="euro_banner">
        Facilite Vous La vie avec<span> Sun Technology Service</span>{" "}
      </section>

      <p>
        réalise votre architecture technologique en ligne avec sun technology
      </p>

      <img src={icon} alt="icon1" className="icon1" />
      <img src={icon} alt="icon2" className="icon2" />
      <img src={icon} alt="icon3" className="icon3" />

      <Flou />
    </Headero>
  );
};

export default Header;
