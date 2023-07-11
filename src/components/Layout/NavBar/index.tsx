import { ReactNode } from "react"
import { StyledNavBar } from "./styles"

interface Props {
  children: ReactNode
}

export const NavBar = ({ children }: Props) => {

  return (
    <StyledNavBar>
      {children}
    </StyledNavBar>
  )
}
