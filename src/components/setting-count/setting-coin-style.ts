import styled from 'styled-components';
import { themeApp } from '../../style-config';
import { motion } from 'framer-motion';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 0 10px;
`;

export const InputContainer = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  border-radius: 10px;
  flex-grow: 1;
  border:1px solid ${({ isActive }) => (isActive ? themeApp.colors.border_active : themeApp.colors.border_main)};
   &:hover {
    border-color:    ${({ isActive }) => (isActive ? themeApp.colors.border_active : themeApp.colors.border_hover)}; 
   }
`;




export const Input = styled.input.attrs({
  type: 'number',
})`
  border: none;
  background: transparent;
  outline: none;
  height: 30px;
  width: 100%;
  text-align: center;
   font-size: 14px;
color: ${themeApp.colors.text};

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    display: none;
  }
`;

export const InputBtn = styled(motion.button) <{ left?: boolean, isActive: boolean }>`
    font-size: 14px;
        outline: none;

    background-color: transparent;
  cursor: pointer;
  height: 100%; 
  font-size: 20px;
   border: none;
  color: ${themeApp.colors.text};
 
  ${({ left }) =>
    left
      ? `
        border-right: 1px solid ${themeApp.colors.border_main};
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
      `
      : `
        border-left: 1px solid ${themeApp.colors.border_main};
        border-top-right-radius: 10px;
        border-bottom-right-radius: 10px;
      `};

&:active {
  box-shadow: inset 0px 0px 5px   ${themeApp.colors.border_active};

 }
`;
