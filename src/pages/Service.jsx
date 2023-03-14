import React from 'react';
import styled from 'styled-components';
import Navigation from '../components/atoms/Navigation';

const color ={
    left:"black",
    right:"black"
  }

  const Header=styled.header`
    color:red;
  `
const Service = () => {
    return (
        <div>
           <Header><Navigation color={color}/></Header>
              
           
        </div>
    );
}

export default Service;
