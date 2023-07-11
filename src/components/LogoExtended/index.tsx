import Link from "next/link"
import { StyledLogoExtended } from "./styles"
import { Logo } from '@/components/Logo'

export const LogoExtended = () => {

  return (
    <StyledLogoExtended>
      <Link href="/">
        <Logo />
        <h1>Ricky &amp; Morty</h1>
      </Link>
    </StyledLogoExtended>
  )
}
