import { ReactNode } from "react";
import { Container } from "./styles";


interface Props {
  children: ReactNode;
}

export const ZeroFound = ({ children }: Props) => {

  return (
    <Container>
      {children}
    </Container>
  )
}
