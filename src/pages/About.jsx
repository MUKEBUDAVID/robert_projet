import React from "react";
import styled from "styled-components";
import Navigation from "../components/atoms/Navigation";
import img from "../assets/About_img.png";
import Footer from "../components/atoms/Footer";
import { NavLink } from "react-router-dom";
const Aboute = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 250vh;
  /* background-color: red; */
`;
const Haeder = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: green; */
`;
const Main = styled.main`
  width: 100vw;
  height: 200vh;
  /* background-color: violet; */
`;
const Img = styled.section`
  width: 100vw;
  height: 300px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;

  img {
    width: 70vw;
    height: 700px;
  }
`;
const Text = styled.section`
  width: 100vw;
  height: 1100px;
  background-color: blue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 3vw;
    line-height: 107px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #ffffff;
    margin-top: 300px;
  }
`;
const Aside = styled.aside`
  width: 100vw;
  height: 500px;
  /* background-color: yellow; */
  margin-top: -21px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  div:nth-child(1) {
    width: 50%;
    height: 100%;
    /* background-color: salmon; */
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 38px;
    display: flex;
    align-items: flex-end;

    color: #ffffff;
    p {
      word-wrap: break-word;
      margin-left: 50px;
    }
  }

  div:nth-child(2) {
    width: 50%;
    height: 100%;
    /* background-color: mediumvioletred; */

    p {
      font-family: "Work Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 2vw;
      line-height: 38px;
      margin-top: 83px;
      margin-left: 50px;

      color: #ffffff;
    }

   
  }
`;

const Button=styled(NavLink)`
 
      width: 250px;
      height: 80px;
      margin-top: 100px;
      margin-left: 300px;
      background: #a91079;
      border: 8px solid #efe9e9;
      border-radius: 54px;

      font-family: "Work Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      position: relative;
      overflow: hidden;
      z-index: 1;
      text-decoration:none;
      cursor: pointer;
    

    &::before {
      content: "";
      width: 250px;
      height: 80px;
      top: -8px;
      left: -257px;
      background: #ffffff;
      border: 8px solid #efe9e9;
      border-radius: 54px;
      position: absolute;
      transition: 0.5s ease all;
      z-index: -1;
    }

    &:hover::before {
      transform: translateX(250px);
    }
    &:hover {
      color: #a91079;
    }
  
`

const About = () => {
  const color = {
    left: "black",
    right: "black",
  };

  return (
    <Aboute>
      <Haeder>
        <Navigation color={color} />
      </Haeder>

      <Main>
        <Img>
          <img src={img} alt="image_home" />
        </Img>
        <Text>
          <h1>Comment nous travaillons</h1>
          <Aside>
            <div>
              <p>
                Nous excellons dans le domaine du potentiel humain et croyons en
                son pouvoir de façonner le changement stratégique,
                organisationnel, économique et sociétal. Ut enim ad minim
                veniam, quis nostrud exercice ullamco laboris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div>
              <p>
                Nous excellons dans le domaine du potentiel humain et croyons en
                son pouvoir de façonner le changement stratégique,
                organisationnel, économique.
              </p>
              <Button to="/Contact">NOUS CONTACTER</Button>
            </div>
          </Aside>
        </Text>
      </Main>

      <footer>
        <Footer />
      </footer>
    </Aboute>
  );
};

export default About;
