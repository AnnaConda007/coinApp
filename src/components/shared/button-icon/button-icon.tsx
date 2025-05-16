import { ButtonIconStyled } from "./button-icon-style";
interface ButtonProps {
    handleButton?: () => void;
    children: React.ReactNode;
}

const ButtonIcon: React.FC<ButtonProps> = ({ handleButton, children }) => {

    return (
        <ButtonIconStyled onClick={handleButton}>
            {children}
        </ButtonIconStyled>)
}

export default ButtonIcon