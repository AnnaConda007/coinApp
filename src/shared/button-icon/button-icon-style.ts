import styled from 'styled-components';


import { motion } from 'framer-motion';

export const ButtonIconStyled = styled(motion.button)` 
    cursor: pointer; 
    border-radius: 50%; 
    border: 0.1px solid wheat;
    background-color:transparent;
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
 `;


export const ButtonIconBorderStyled = styled(motion.div)`
    border-radius: 50%;
   width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
   cursor: pointer; 

 
 `;

