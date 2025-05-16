import { FC } from "react"
import { MainButtonContainerStyled, MainButtonStyled, ButtonShadow } from "./main-button-style"
import { themeApp } from "../../../style-config"


interface MainButtonProps {
    handleButton: () => void,
    text: string

}

const MainButton: FC<MainButtonProps> = ({ handleButton, text }) => {

    return (
        <MainButtonContainerStyled>
            (<MainButtonStyled onClick={handleButton}
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
                    {text}
                </ButtonShadow>
            </MainButtonStyled>)
        </MainButtonContainerStyled>

    )
}


export default MainButton
