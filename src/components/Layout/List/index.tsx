import { ReactNode } from "react"
import { Container } from "./styled"

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
