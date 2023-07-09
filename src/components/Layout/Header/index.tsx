import { ReactNode } from "react"
import { StyledHeader } from "./styles"

interface Props {
  children: ReactNode
}

export const Header = ({ children }: Props) => {
  return (
    <StyledHeader>
      {children}
    </StyledHeader>
  )
}
