import React from "react";
import styled from "styled-components";

const Footeur = styled.footer`
  width: 100vw;
  height: 400px;
  background: linear-gradient(93.99deg, #313de7 0.51%, #283444 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Fouter_top = styled.div`
  width: 100vw;
  height: 250px;
  /* background-color: yellow; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Left = styled.div`
  width: 30%;
  height: 100%;
  /* background-color: fuchsia; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 56px;
    color: #ffffff;
  }
  div {
    width: 90%;
    height: 50px;
    border: 1px solid #ffffff;
    border-radius: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
  }
  input {
    width: 60%;
    height: 100%;
    border-radius: 50px 0px 0px 50px;
    padding-left: 5px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 0px;
    color: white;
    font-size: 20px;
  }
  input::placeholder {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.3vw;
    line-height: 23px;
    text-align: center;

    color: #ffffff;
  }
  button {
    width: 35%;
    height: 37px;
    background: linear-gradient(90deg, #2af598 0%, #009efd 100%);
    border-radius: 50px;
    border: 0px;
    color: #ffffff;
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 1.3vw;
    margin-right: 5px;
  }
`;
const Right = styled.div`
  width: 70%;
  height: 100%;
  /* background-color: blueviolet; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 40%;
  /* background-color: gold; */
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Lione = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 2vw;
    line-height: 140%;
    /* identical to box height, or 34px */

    color: #ffffff;
  }

  ul {
    list-style: none;
  }

  li {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 500;
    font-size: 0.9vw;
    line-height: 20px;
    color: #ffffff;
  }
  .one {
    margin-bottom: 75px;
  }
`;
const Hr = styled.hr`
  width: 80%;
  height: 3px;
  color: white;
`;
const Botton = styled.p`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;

  color: #ffffff;
  margin-top:20px;
`;
const Footer = () => {
  return (
    <Footeur>
      <Fouter_top>
        <Left>
          <h1>Newslatter</h1>{" "}
          <div>
            <input type="text" placeholder="Enter your email" />{" "}
            <button disabled="disabled">Subscribe</button>
          </div>{" "}
        </Left>

        <Right>
          <List>
            <Lione>
              <h1>Support</h1>
              <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </Lione>

            <Lione>
              <h1>Useful Link</h1>
              <ul>
                <li>Payment & Tax</li>
                <li>Team of service</li>
                <li>Privaci Policy</li>
              </ul>
            </Lione>

            <Lione>
              <h1>Our Menu</h1>
              <ul className="one">
                <li>Best Product</li>
                <li>Category</li>
              </ul>
            </Lione>

            <Lione>
              <h1>Address</h1>
              <ul className="one">
                <li>
                  JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia
                </li>
                <li>hallo@daunku.com</li>
              </ul>
            </Lione>
          </List>
        </Right>
      </Fouter_top>

      <Hr />

      <div>
        <Botton>© 2023 MukebuDavid - All rights reserved.</Botton>
      </div>
    </Footeur>
  );
};

export default Footer;
