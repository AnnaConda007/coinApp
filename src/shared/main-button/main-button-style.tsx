import styled from 'styled-components';
import { motion } from 'framer-motion';


export const MainButtonStyled = styled(motion.button)`
background-color: transparent;
 border: none;
color: white;
  border:1px solid  rgb(44,0,143);
  padding: 0;
 width: 85%;
 border-radius: 10px;
font-size: 15px;
font-weight:600;
 height: 40px;
 text-transform:uppercase

`



export const ButtonShadow = styled(motion.div)`
     display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
     border-radius: 10px;

 `;


