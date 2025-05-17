import { FC } from "react"
import { MainButtonStyled, ButtonShadow } from "./main-button-style"
import { themeApp } from "../../style-config"


interface MainButtonProps {
    handleButton: () => void,
    text: string

}

const MainButton: FC<MainButtonProps> = ({ handleButton, text }) => {

    return (
        (<MainButtonStyled onClick={handleButton}
            whileHover={{
                scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}


        >
            <ButtonShadow
                initial={{ boxShadow: `2px 1px 5px ${themeApp.colors.border_color_third}` }}
                animate={{ boxShadow: `1px 2px 10px ${themeApp.colors.border_color_third}` }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}>
                {text}
            </ButtonShadow>
        </MainButtonStyled>)

    )
}


export default MainButton
