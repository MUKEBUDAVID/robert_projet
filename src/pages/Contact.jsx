import React, { useState } from "react";
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
  /* background-color: green; */
`;

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  background-color: #4b5bf9;
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
  margin-bottom: 40px;
  width: 100%;
  height: 350px;
  /* background-color: dodgerblue; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button:active,
  button:focus {
    width: 70%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    background: rgba(87, 10, 87, 0.5);
    border: 1.79583px solid #a91079;
    border-radius: 9.57778px;
  }
  button {
    width: 70%;
    height: 50px;
    background-color:transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    border:0px solid transparent;
  }
  button span {
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
const Input = styled.form`
  width: 100%;
  height: 85%;
  /* background-color:silver; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  input {
    width: 80%;
    height: 15%;
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
  width: 38%;
  height: 46.73px;
  background: #a91079;
  border-radius: 9.57778px;
  border: 0px solid transparent;
  /* margin-right: 230px; */
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

function Contact() {
  const [form, setform] = useState({});
  const [conct, setconct] = useState("Your Email");

  const requestOptions = {
    method: "POST", 
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  };

  

  const handleFocus = (even) => {
    even.stopPropagation();
    even.preventDefault();
    setconct(even.target.id) ;
    

  };

  const handlesubmit =async (even) => {
    even.stopPropagation();
    even.preventDefault();
   await setform({
      nom: even.target["nom"].value,
      adress: even.target["email"].value,
      message: even.target["message"].value,
      type:conct
    });

    

try {
await fetch("https://example.com/profile",requestOptions)

} catch (error) {
  console.log(error);
}
    

    
  };

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
            <button tabIndex="1"  onFocus={handleFocus} autoFocus={true} id="Your Email ">
              <img src={email} alt="icon_email" />{" "}
              <span>SaulDesign@gmail.com</span>
            </button>

            <button tabIndex="2"  onFocus={handleFocus} id="Your Phone Number">
              <img src={phone} alt="icon_telephone" /> <span>+123 456 789</span>
            </button>

            <button className="cercle"  onFocus={handleFocus} tabIndex="3" id="Your instagram">
              <img
                src={instagrame}
                alt="icon_instagrame"
                
               
              />
            </button>

            <button className="cercle" onFocus={handleFocus}  tabIndex="4" id="Your Facebook">
              <img
                src={facebook}
                alt="icon_facebook"
                
                
              />
            </button>

            <button className="cercle" onFocus={handleFocus} tabIndex="5" id="Your Twiter">
              <img
                src={twiter}
                alt="icon_twiter"
                
                
              />
            </button>
          </Reseaux>
        </Left>

        <Right>
          <Input onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Your Name"
              name="nom"
              required
              style={{}}
            />
            <input type="email" placeholder={conct} name="email" required />
            <textarea
              cols="30"
              rows="10"
              placeholder="Your Message"
              maxLength="1000"
              required
              name="message"
            ></textarea>

            <Button type="submit">
              <img src={icon_flache} alt="icon_fleche" />
              <p>Send Message</p>
            </Button>
          </Input>
        </Right>
      </Main>
    </Contacte>
  );
}

export default Contact;
