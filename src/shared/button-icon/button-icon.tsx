import { scale } from "framer-motion";
import { themeApp } from "../../style-config";
import { ButtonIconBorderStyled, ButtonIconStyled } from "./button-icon-style";

interface ButtonProps {
    handleButton?: () => void;
    children: React.ReactNode;
}



const ButtonIcon: React.FC<ButtonProps> = ({ handleButton, children }) => {

    return (

        <ButtonIconBorderStyled onClick={handleButton}
            whileTap={{
                scale: 0.7
            }}>
            <ButtonIconStyled
                initial={{ boxShadow: `5px 5px 20px ${themeApp.colors.border_color_third}` }}
                animate={{ boxShadow: `-5px -5px 20px ${themeApp.colors.border_color_third} `, rotateZ: 180, scale: 1.3 }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse",
                }}
            >
                {children}
            </ButtonIconStyled >
        </ButtonIconBorderStyled>
    )
}

export default ButtonIcon