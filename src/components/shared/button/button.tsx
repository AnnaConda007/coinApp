import "./button-style.ts"
import { ButtonStyled } from "./button-style";

interface ButtonProps {
    handleButton?: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ handleButton, children }) => {

    return (
        <ButtonStyled onClick={handleButton}>
            {children}
        </ButtonStyled>)
}

export default Button