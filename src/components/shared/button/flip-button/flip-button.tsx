import { FC } from "react"
import { FlipButtonContainerStyled, FlipButtonStyled, ButtonShadow } from "./flip-button-style"
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


                >
                    <ButtonShadow
                        initial={{ boxShadow: `2px 1px 5px ${themeApp.colors.border_active}` }}
                        animate={{ boxShadow: `1px 2px 10px ${themeApp.colors.border_active}` }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            repeatType: "reverse",
                        }}>
                        FLIP
                    </ButtonShadow>
                </FlipButtonStyled>)}
        </FlipButtonContainerStyled>

    )
}


export default FlipButton
