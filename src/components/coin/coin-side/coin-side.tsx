
import headImage from "../../../assets/free-icon-eagle-14030542.png";
import tailImage from "../../../assets/free-icon-man-10060478.png";
import { CoinStyled, CoinBeforeStyled } from './coin-side-style';
import { CoinSide } from '../../../enums/coin';
import './coin-side-style';

const CoinSideComponent = ({ side, handleCoin }: { side: CoinSide, handleCoin?: () => void }) => {
  const coinSideMap = {
    [CoinSide.HEADS]: headImage,
    [CoinSide.TAILS]: tailImage,
  };

  const coinImg = coinSideMap[side]

  return (
    <CoinStyled onClick={handleCoin}>
      <CoinBeforeStyled $coinImage={coinImg} />
    </CoinStyled>
  );
};
export default CoinSideComponent 