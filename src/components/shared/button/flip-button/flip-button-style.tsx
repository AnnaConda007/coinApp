import styled from 'styled-components';
import { themeApp } from '../../../../style-config';
import { motion } from 'framer-motion';

export const FlipButtonContainerStyled = styled.div`
     display: flex;
    justify-content: center;
 width: 100%;
height:40px;
 width: 100%;
height: 40px;
 `;


export const FlipButtonStyled = styled(motion.button)`
background-color: transparent;
 border: none;
color: white;
  border:1px solid  rgb(44,0,143);
  box-shadow : 0px 0px 25px ${themeApp.colors.border_main_second};
width: 85%;
 border-radius: 10px;
font-size: 15px;
font-weight:600;
 
 

`

