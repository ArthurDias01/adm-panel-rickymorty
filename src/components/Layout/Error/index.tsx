import { ErrorContainer, ErrorTitle } from "./styled"
import { Icon } from './ErrorIcon'

export const Error = () => {

  return (
    <ErrorContainer>
      <Icon />
      <ErrorTitle>Error Loading</ErrorTitle>
    </ErrorContainer>
  )
}
