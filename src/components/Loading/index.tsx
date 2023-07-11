import { Logo } from "../Logo"
import { Container, Loader, LoaderContainerForLogo } from "./styles"


export const Loading = () => {

  return (
    <Container>
      <LoaderContainerForLogo>
        <Logo />
      </LoaderContainerForLogo>
    </Container>
  )
}
