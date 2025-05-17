import { themeApp } from "../../style-config";
import { ButtonIconStyled } from "./button-icon-style";

interface ButtonProps {
    handleButton?: () => void;
    children: React.ReactNode;
}



const ButtonIcon: React.FC<ButtonProps> = ({ handleButton, children }) => {

    return (
        <ButtonIconStyled onClick={handleButton}
            initial={{ boxShadow: `5px 5px 20px ${themeApp.colors.border_active}` }}
            animate={{ boxShadow: `-5px -5px 20px ${themeApp.colors.border_active} `, rotateZ: 180 }}
            transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: "reverse",
            }}




        >
            {children}
        </ButtonIconStyled >)
}

export default ButtonIcon