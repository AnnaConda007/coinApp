import styled from "styled-components";

import { motion } from "framer-motion";

export const ButtonIconStyled = styled(motion.button)`
  cursor: pointer;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonIconBorderStyled = styled(motion.div)`
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
