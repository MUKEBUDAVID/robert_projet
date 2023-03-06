import React from "react";
import styled from "styled-components";
import image_1 from "../../assets/image 1.jpg"


const Benright=styled.section`
    width:45%;
    height:550px;


img{
    width:100%;
    height:100%;
}
`
const BenRight = () => {
  return (
    <Benright>
      <img src={image_1} alt="logo_phone" />
    </Benright>
  );
};

export default BenRight;
