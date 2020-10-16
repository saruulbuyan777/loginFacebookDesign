import React from "react";
import styled from "styled-components";





const Button = styled.button`
   padding: ${props => props.smallPadding ? "0.6rem 1rem" : "0.6rem 8.2rem;"};
   color: #ffffff;
   border-radius : 5px;
   border: none;
   font-weight:bold;
   font-size: ${props => props.smallSize ? "1.2rem": "1.5rem"};
   background: ${props => props.primary ? "#1877f2" : "#36A420"};
   
   

`;

export default Button

