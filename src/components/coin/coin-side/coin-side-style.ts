import styled from 'styled-components';
import background from "../../../assets/tekstura-metalla-347.webp";


export const CoinStyled = styled.div`
  width: 150px;
  height: 150px;
  position: relative;
  border-radius: 50%;
  box-shadow: 5px 10px 10px black, inset 0px 0px 5px rgba(255, 255, 255, 0.935);
  background: url(${background}) no-repeat center;
  background-size: cover;
  padding: 5px;
 
`;

export const CoinBeforeStyled = styled.div <{ $coinImage: string }>`
  content: "";
  position: absolute;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url(${props => props.$coinImage}) no-repeat center;
  background-size: 80%;
  box-sizing: content-box;
  opacity: 0.8;
`;
