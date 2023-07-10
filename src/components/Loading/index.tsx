import { Logo } from "../Logo"
import { Container, Loader, LoaderContainerForLogo } from "./styled"


export const Loading = () => {

  return (
    <Container>
      <LoaderContainerForLogo>
        <Logo />
      </LoaderContainerForLogo>
    </Container>
  )
}
