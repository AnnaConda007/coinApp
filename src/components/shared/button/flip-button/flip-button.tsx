import { FC } from "react"
import { FlipButtonContainerStyled, FlipButtonStyled } from "./flip-button-style"
import { themeApp } from "../../../../style-config"


interface FlipButtonProps {
    handleButton: () => void,
    amountCoin: string,

}

const FlipButton: FC<FlipButtonProps> = ({ handleButton, amountCoin }) => {

    return (
        <FlipButtonContainerStyled>
            {amountCoin !== "0" &&
                (<FlipButtonStyled onClick={handleButton}
                    key={amountCoin}
                    whileHover={{
                        scale: 1.05,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ filter: `drop-shadow(2px 1px 25px  ${themeApp.colors.border_active})` }}
                    animate={{ filter: `drop-shadow(1px 2px 10px ${themeApp.colors.border_main_second}` }}
                    transition={{
                        duration: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}

                >
                    FLIP
                </FlipButtonStyled>)}
        </FlipButtonContainerStyled>

    )
}


export default FlipButton
