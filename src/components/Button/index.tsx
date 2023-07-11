import { ReactNode } from "react";
import { StyledButton } from "./styles";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = ({ children, ...rest }: Props) => {

  return (
    <StyledButton {...rest}>
      {children}
    </StyledButton>
  )
}
