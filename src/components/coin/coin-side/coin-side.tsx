
import headImage from "../../../assets/free-icon-eagle-14030542.png";
import tailImage from "../../../assets/free-icon-man-10060478.png";
import { CoinStyled, Wrap, CoinBeforeStyled } from './coin-side-style';
import { CoinSide } from '../../../enums/coin';
import './coin-side-style';
import { coinSize } from "./coin-side-style";

interface CoinSideComponentProps {
  side: CoinSide,
  handleCoin?: () => void,
  coinSize: coinSize
}


const CoinSideComponent: React.FC<CoinSideComponentProps> = ({ side, handleCoin, coinSize }) => {
  const coinSideMap = {
    [CoinSide.HEADS]: headImage,
    [CoinSide.TAILS]: tailImage,
  };

  const getRandomPadding = () => {
    const top = Math.floor(Math.random() * 11);
    const right = Math.floor(Math.random() * 11);
    const bottom = Math.floor(Math.random() * 11);
    const left = Math.floor(Math.random() * 11);
    return `${top}px ${right}px ${bottom}px ${left}px`;
  };

  const coinImg = coinSideMap[side]

  return (
    <Wrap $padding={getRandomPadding()}>
      <CoinStyled $coinSize={coinSize} onClick={handleCoin}>
        <CoinBeforeStyled $coinSize={coinSize} $coinImage={coinImg} />
      </CoinStyled>
    </Wrap>

  );
};
export default CoinSideComponent 