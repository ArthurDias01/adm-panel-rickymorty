import { ReactNode } from "react"
import { Container } from "./styles"

interface Props {
  children: ReactNode
}

export const List = ({children}: Props) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
