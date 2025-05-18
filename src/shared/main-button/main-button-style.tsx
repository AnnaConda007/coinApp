import styled from "styled-components";
import { motion } from "framer-motion";
import { themeApp } from "../../style-config";

export const MainButtonStyled = styled(motion.button)`
  background-color: transparent;
  color: white;
  border: 1px solid ${themeApp.colors.background_color_second};
  padding: 0;
  width: 85%;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  height: 40px;
  text-transform: uppercase;
  font-family: ${themeApp.fonts.main_font};
`;

export const ButtonShadow = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
