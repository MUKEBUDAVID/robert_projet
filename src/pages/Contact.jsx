import React from "react";
import styled from "styled-components";
import Navigation from "../components/atoms/Navigation";
import icon_flache from "../assets/fleche.svg";
import email from "../assets/Vector_email.svg";
import facebook from "../assets/Vector_face.svg";
import instagrame from "../assets/Vector_insta.svg";
import phone from "../assets/Vector_phone.svg";
import twiter from "../assets/Vector_twiter.svg";

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
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 28.7333px;
    line-height: 35px;

    color: #eeeeee;
  }
  span {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 28.7333px;
    line-height: 23px;
    color: #a91079;
  }
`;
const Reseaux = styled.aside`
  margin-bottom: 70px;
  width: 100%;
  height: 300px;
  /* background-color: dodgerblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:active,div:focus {
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items:center;
    background: rgba(87, 10, 87, 0.5);
    border: 1.79583px solid #a91079;
    border-radius: 9.57778px;
  }
  div {
    width: 70%;
    height: 50px;
    /* background-color:black; */
    display: flex;
    flex-direction: row;
    align-items:center;
  }
  div span {
    margin-left: 30px;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 500;
    font-size: 17px;
    line-height: 18px;
    /* identical to box height */

    color: #ffffff;
  }
  img {
    width: 30px;
    height: 30px;
  }
  .cercle {
    width: 30px;
    height: 30px;
    border-radius: 0px;
    background-color: transparent;
    border: 0px transparent solid;
    transition: 200ms ease-in all;
  }
  .cercle:active,
  .cercle:focus {
    width: 50px;
    height: 50px;
    border-radius: 30px;
    background-color: #a91079;
    border: 10px #a91079 solid;
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
  input::placeholder,
  textarea::placeholder {
    font-family: "Work Sans";
    font-style: normal;
    font-weight: 600;
    font-size: 1.5vw;
    line-height: 20px;
    opacity: 0.4;
  }

  textarea {
    width: 80%;
    height: 50%;
    resize: none;
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
  transition: 300ms ease-in all;
  &:active {
    width: 250px;
    border-radius: 9.57778px;
    border: 0px solid transparent;
  }

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

function Contact  ()  {
    

let conct="Your Email";

const handleclick = (even) => {
 even.stopPropagation();
 even.preventDefault();

  console.log(even);
  
}






  return (
    <Contacte>
      <Haeder>
        <Navigation color={color} />
      </Haeder>

      <Main>
        <Left>
          <h1>
            Let’s discuss <br /> on something <span>cool</span> <br /> together
          </h1>

          <Reseaux>
            <div tabIndex="9" className="Your Email" onClick={handleclick} >
              <img src={email} alt="icon_email" />{" "}
              <span>SaulDesign@gmail.com</span>
            </div>

            <div tabIndex="10" className="Your Phone Number" onClick={handleclick} >
              <img src={phone} alt="icon_telephone" /> <span>+123 456 789</span>
            </div>

            <img
              src={instagrame}
              alt="icon_instagrame"
              className="cercle"
              tabIndex="11"
              id="Your Intsta"
              onClick={handleclick}
              
            />
            <img
              src={facebook}
              alt="icon_facebook"
              className="cercle"
              tabIndex="12"
              id="Your Facebook"
              onClick={handleclick}
              
            />
            <img
              src={twiter}
              alt="icon_twiter"
              className="cercle"
              tabIndex="13"
              id="Your Twiter"
              onClick={handleclick}
              
            />
          </Reseaux>
        </Left>

        <Right>
          <Input>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder={conct} />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              maxLength="1000"
              required
            ></textarea>
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
