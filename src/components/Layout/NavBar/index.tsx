import { ReactNode } from "react"
import { StyledNavBar } from "./styled"

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
