import React from 'react';
import styled from 'styled-components';
import Navigation from "../components/atoms/Navigation";
import { NavLink} from "react-router-dom";
import bureau from "../assets/About_img.png";



const color = {
    left: "black",
    right: "white",
  };

const Onseservices=styled.div`
    
    width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(12, 1fr);

`
const Header = styled.header`
  border-radius: 10px;
  background-color:transparent;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 25px;
  position:absolute;
  left:275px;
  z-index:10;

`;


const Left=styled.div`
grid-column: 1;
background: #F0EFEB;
grid-row:1/13 ;


`

const Titre=styled.div`
    width:227px;
    height:40px;
  background-color:white;
  display:flex;
  justify-content:left;
  align-items:center;
  margin-top:100px;
  margin-left:100px;

  p{
text-decoration:underline;
 

font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 20.6055px;
line-height: 31px;
color: #000000;


  }


`
const Presentaction=styled.div`
width:75%;
height:50%;
background: white;
margin-top:50px;
margin-left:100px;

P{
    
font-family: 'Work Sans';
font-style: normal;
font-weight: 700;
font-size: 22px;
line-height: 38px;

color: #282424;
}


`
const Button=styled(NavLink)`
 
      width: 250px;
      height: 80px;
      margin-top: 50px;
      margin-left: 200px;
      background: #a91079;
      border: 8px solid #efe9e9;
      border-radius: 14px;

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
      border-radius: 14px;
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
const Right=styled.div`
grid-column: 2;
grid-row:1/13 ;
background-color:#313DE7; 
z-index:1;
position:relative;


.form_1{
    
width: 196.99px;
height: 491.23px;
margin-top:100px;
margin-left:400px;
background: #E2ECE9;
border-radius: 8.24219px;
z-index:2;


}

img{
    width:400px;
    height:300px;
    z-index:3;
    left:100px;
    top:200px;
    position:absolute;
    clip-path: polygon(100% 0%, 75% 50%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
    border-radius:25px;
}


`;


export default function OneService() {
  return (
    <Onseservices>
        <Left>
        <Header>
        <Navigation color={color} />
        </Header>


        <Titre>
    <p>Les Services</p>
       </Titre>

   <Presentaction>
   <p>
   Nous excellons dans le domaine du potentiel humain et 
   croyons en son pouvoir de façonner le changement stratégique,
    organisationnel, économique et sociétal. 
   </p>

   </Presentaction>

   <Button to="/Contact">NOUS CONTACTER</Button>
        </Left>
        

        <Right>
     <div className='form_1'>
     </div>


   <img src={bureau} alt="image_bureau"  />
        </Right>

    </Onseservices>
  )
}
