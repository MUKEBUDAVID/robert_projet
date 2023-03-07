import React from "react";
import styled from "styled-components";
import Navigation from "../components/atoms/Navigation";
import icon_flache from "../assets/fleche.svg";

const color = { left: "black", right: "black" };

const Contacte = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const Haeder = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: green;
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #313de7;
`;
const Left = styled.div`
  width: 40vw;
  height: 75vh;
  background-color: red;



  h1{
    font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 28.7333px;
line-height: 35px;

color: #EEEEEE;
  }
    span{
        font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 28.7333px;
line-height: 23px;
color:#A91079 ;

    }
`;
const Right = styled.div`
  width: 40vw;
  height: 70vh;
  /* background-color: yellow; */
  background: #eeeeee;
  border-radius: 14.3667px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.div`
  width: 100%;
  height: 65%;
  /* background-color:silver; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  input {
    width: 80%;
    height: 20%;
    border: 0px solid transparent;
    border-bottom: 3px solid #a91079;
    padding-top: 10px;
    color: #a91079;
    font-family: "Work Sans";
    font-style: italic;
    font-weight: 600;
    font-size: 1.5vw;
  }
  input::placeholder,textarea::placeholder {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    line-height: 20px;
    opacity:0.4
  }

  textarea {
    width: 80%;
    height: 50%;
  }
`;

const Button = styled.button`
  width: 188.57px;
  height: 46.73px;
  background: #a91079;
  border-radius: 9.57778px;
  border: 0px solid transparent;
  margin-right: 230px;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin-right: 10px;
  }
  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 11.9722px;
    line-height: 18px;
    /* identical to box height */

    text-align: center;

    color: #eeeeee;
  }
`;

const Contact = () => {
  return (
    <Contacte>
      <Haeder>
        <Navigation color={color} />
      </Haeder>

      <Main>
        <Left>
          <h1>Let’s discuss <br/> on something <span>cool</span> <br/>  together</h1>



          <aside>
         <p><img src="" alt="" srcset="" /> <span></span></p>
         <p><img src="" alt="" srcset="" /> <span></span></p>
         <p><img src="" alt="" srcset="" /> </p>


          </aside>
        </Left>

        <Right>
          <Input>
            <input type="text" placeholder="Your Name" />
            <input type="text" />
            <textarea   cols="30" rows="10" placeholder="Your Message"></textarea>
          </Input>

          <Button>
            <img src={icon_flache} alt="icon_fleche" />

            <p>Send Message</p>
          </Button>
        </Right>
      </Main>
    </Contacte>
  );
};

export default Contact;
