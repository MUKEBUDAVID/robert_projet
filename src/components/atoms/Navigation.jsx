import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
width: 55vw;
max-width: 863px;
height: 47px;
/* background-color: red; */
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
padding: 0px;
margin-top:10px;
`;
const Linkone = styled(NavLink)`
text-decoration: none;
width: 115px;
height: 47px;

font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 3vw;
line-height: 47px;
text-align: center;
color:white;
cursor: pointer;


&:hover{
  color:#fd00f5; 
   };
`;
const Linktwo = styled(NavLink)`
text-decoration: none;
width: 115px;
height: 47px;

font-family: 'Work Sans', sans-serif;
font-style: normal;
font-weight: 600;
font-size: 3vw;
line-height: 47px;
text-align: center;
color:white;
cursor: pointer;
&:hover{
  color:#fd00f5;  
  }
`;



const Navigation = () => {
  return (
    <Nav>
      <Linkone to="/">Home</Linkone>
      <Linkone to="/Service">Service</Linkone>
      <Linktwo to="/About">About</Linktwo>
      <Linktwo to="/Contact">Contact</Linktwo>
    </Nav>
  );
};

export default Navigation;
