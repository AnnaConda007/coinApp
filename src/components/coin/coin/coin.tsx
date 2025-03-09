import Heads from "../heads/heads"
import Tails from "../tails/tails"
import { getRandomNumber } from "../../../utils/get-random-number"

const Coin = () => { 
const medianValue  = 5 
const FallenSide = getRandomNumber() > medianValue ? Tails : Heads

   return (
 <FallenSide/>
  )
}

export default Coin