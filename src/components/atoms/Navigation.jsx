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
  color:${(props)=>  props.$color.left};
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
  color:${(props)=>  props.$color.right};
  cursor: pointer;
  &:hover{
    color:#fd00f5;  
    }
  `;


const Navigation = ({color}) => {
  
  
  return (
    <Nav>
      <Linkone to="/" $color={color}>Home</Linkone>
      <Linkone to="/Service"  $color={color}>Service</Linkone>
      <Linktwo to="/About" $color={color}>About</Linktwo>
      <Linktwo to="/Contact" $color={color}>Contact</Linktwo>
    </Nav>
  );
};

export default Navigation;
