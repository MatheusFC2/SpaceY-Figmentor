import { GlobalStyles } from '../../styles/globalstyles';
import { ButtonComponent } from './styles';

export interface ButtonProps {
    text?: string;
    fullWidth?: boolean;
}

function Button({ text, fullWidth }: ButtonProps) {
  return (
    <>
        <ButtonComponent>
            {text}
        </ButtonComponent>
    </>
  )
}

export default Button;
