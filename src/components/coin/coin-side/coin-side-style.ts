import styled from 'styled-components';
import background from "../../../assets/tekstura-metalla-347.webp";

export enum coinSize {
  min = "min",
  max = "max"
}


export const CoinStyled = styled.div <{ $coinSize: coinSize }>`
  width: ${props => props.$coinSize === coinSize.max ? "170px" : "100px"};
  height:  ${props => props.$coinSize === coinSize.max ? "170px" : "100px"};
  position: relative;
  border-radius: 50%;
  box-shadow: 5px 10px 10px black, inset 0px 0px 5px rgba(255, 255, 255, 0.935);
  background: url(${background}) no-repeat center;
  background-size: cover;
  padding: 5px;  
 
`;

export const CoinBeforeStyled = styled.div <{ $coinSize: coinSize, $coinImage: string }>`
  content: "";
  position: absolute;
  width: ${props => props.$coinSize === coinSize.max ? "170px" : "100px"};
  height:  ${props => props.$coinSize === coinSize.max ? "170px" : "100px"};
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${props => props.$coinImage}) no-repeat center,              radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.3), transparent);
               radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.3), transparent);
  background-size: 80%;
  box-sizing: content-box;
  opacity: 0.8; 
  
`;


export const Wrap = styled.div <{ $padding: string }>`
   width: 170px;
  height: 170px; 
 padding:${props => props.$padding}

`;
