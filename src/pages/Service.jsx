import React, { useEffect } from "react";
import styled from "styled-components";
import Navigation from "../components/atoms/Navigation";
import { useState } from "react";
// import jest from "../assets/jeshoots-com-sMKUYIasyDM-unsplash.jpg";
import { useFetch } from "../utils/hooks/fetch";
const color = {
  left: "black",
  right: "black",
};

const Servicex = styled.section`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(11, 1fr);
  grid-template-rows: repeat(11, 1fr);
`;
const Header = styled.header`
  color: red;
  /* width:70vw;
    height:100px; */
  border-radius: 10px;
  background-color: #4b5bf9;
  grid-column: 5/12;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
`;
const Aside = styled.aside`
  grid-column: 1/4;
  grid-row: 1/12;
  background-color: #4b5bf9;
  border-radius: 10px;
  margin-left: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
`;
const Ul = styled.ul`
  position: relative;
  top: 34px;
  left: 10%;
  background-color: #4b5bf9;
  width: 90%;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.5rem;

  .active {
    list-style: none;
    color: black;
    background-color: white;
    height: 50px;
    width: 90%;
    margin-left: 10%;
    padding-left: 10%;
    display: flex;
    align-items: center;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  li {
    list-style: none;

    height: 50px;
    width: 90%;
    margin-left: 10%;
    padding-left: 10%;
    display: flex;
    align-items: center;
    cursor: pointer;

    font-family: "Work Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 75px;
    /* identical to box height */

    text-align: center;

    color: #f5f5f5;
  }
`;
const Source = styled.section`
  grid-column: 5/12;
  grid-row: 2/12;
  /* background-color:red; */
  margin-right: 25px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 10px;
  margin-top: 10px;
  margin-bottom: 50px;

  aside {
    /* background-color:yellow; */
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    /* z-index:1; */
    position: relative;
    transition: 700ms ease all;
    overflow: hidden;
    cursor: pointer;
  }
  aside:after {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    pointer-events: none;
    background-image: linear-gradient(
      to bottom,
      hsla(0, 0%, 0%, 0) 0%,
      hsla(0, 0%, 0%, 0.009) 11.7%,
      hsla(0, 0%, 0%, 0.034) 22.1%,
      hsla(0, 0%, 0%, 0.072) 31.2%,
      hsla(0, 0%, 0%, 0.123) 39.4%,
      hsla(0, 0%, 0%, 0.182) 46.6%,
      hsla(0, 0%, 0%, 0.249) 53.1%,
      hsla(0, 0%, 0%, 0.32) 58.9%,
      hsla(0, 0%, 0%, 0.394) 64.3%,
      hsla(0, 0%, 0%, 0.468) 69.3%,
      hsla(0, 0%, 0%, 0.54) 74.1%,
      hsla(0, 0%, 0%, 0.607) 78.8%,
      hsla(0, 0%, 0%, 0.668) 83.6%,
      hsla(0, 0%, 0%, 0.721) 88.7%,
      hsla(0, 0%, 0%, 0.762) 94.1%,
      hsla(0, 0%, 0%, 0.79) 100%
    );

    z-index: 10;

    visibility: hidden;
    transition: 700ms all;
  }

  aside img {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    /* z-index:-1; */
  }

  aside:hover::after {
    visibility: visible;
  }

  aside:hover section {
    transform: translateY(-70%);
  }
`;
const CenterText = styled.section`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  height: 100px;
  /* background-color:red; */
  transition: 700ms ease all;
  transform: translateY(70px);
  z-index: 200;

  h1 {
    font-family: "JetBrains Mono";
    font-size: 1.7rem;
    font-weight: bold;
    line-height: 1.2;

    color: #f0f0f6;
    margin-bottom: 10px;
  }
  span {
    font-size: 1.125rem;
    font-style: italic;
    line-height: 1.35;
    color: #f0f0f6;
  }

  button {
    cursor: pointer;
    margin-top: 1.5rem;
    padding: 0.75rem 1.5rem;
    font-size: 0.65rem;
    font-weight: bold;
    letter-spacing: 0.025rem;
    text-transform: uppercase;
    color: white;
    background-color: black;
    border: none;

    &:hover {
      background-color: lighten(black, 5%);
    }

    &:focus {
      outline: 1px dashed yellow;
      outline-offset: 3px;
    }
  }
`;
function Service() {
  const [active, setactive] = useState({
    li_1: "active",
    li_2: "",
    li_3: "",
    li_4: "",
    li_5: "",
    li_6: "",
  });
  const [cardData, setcardData] = useState([]);
  const { data, isLoading, error } = useFetch("./data.json");

  console.log(isLoading);

  useEffect(() => {
    if (isLoading === false) {
        console.log(data);

      setcardData(data.card);
    }
  });

  // for change the className
  const changeSelectOnclick = (e) => {
    for (let i = 1; i < 7; ++i) {
      if (e.target.id == i) {
        let test = `li_${i}`;
        setactive({
          ...active,
          li_1: "",
          li_2: "",
          li_3: "",
          li_4: "",
          li_5: "",
          li_6: "",
          [test]: "active",
        });
      }
    }
  };
  return (
    <Servicex>
      <Header>
        <Navigation color={color} />
      </Header>
      <Aside>
        <Ul>
          <li
            className={active.li_1}
            key={"li_1"}
            id={1}
            onClick={changeSelectOnclick}
          >
            Maitenannces
          </li>
          <li
            className={active.li_2}
            key={"li_2"}
            id={2}
            onClick={changeSelectOnclick}
          >
            Installation et configuration
          </li>
          <li
            className={active.li_3}
            key={"li_3"}
            id={3}
            onClick={changeSelectOnclick}
          >
            Webmsater
          </li>
          <li
            className={active.li_4}
            key={"li_4"}
            id={4}
            onClick={changeSelectOnclick}
          >
            consultation
          </li>
          <li
            className={active.li_5}
            key={"li_5"}
            id={5}
            onClick={changeSelectOnclick}
          >
            sous traitances
          </li>
          <li
            className={active.li_6}
            key={"li_6"}
            id={6}
            onClick={changeSelectOnclick}
          >
            Base de donnne
          </li>
        </Ul>
      </Aside>
      <Source>
        {/* <aside>
              <img src={jest} alt="illustraction"  />
            <CenterText>  
            <h1>Reparation</h1>

            <span>
            Check out all of these gorgeous
             mountain trips with beautiful views 
             of, you guessed it, the mountains
            </span>

            <button>View Trips </button>
            </CenterText>
             </aside>  */}

        {cardData.map((cards,index) => {
          return (
            <aside key={`${cards}-${index}`} >
              <img src={cards.urlimg} alt="illustraction" />
              <CenterText>
                <h1>{cards.titre}</h1>

                <span>{cards.corps}</span>

                <button>View Trips </button>
              </CenterText>
            </aside>
          )
        })}
      </Source>
    </Servicex>
  );
}

export default Service;
