import { ReactNode } from 'react'
import { StyledNavlink } from './styles'
import Link, { LinkProps } from 'next/link'

interface Props extends LinkProps {
  linkTitle: string
}

export const Navlink = ({ linkTitle, ...rest }: Props) => {

  return (
    <StyledNavlink {...rest}>
      {linkTitle}
    </StyledNavlink>
  )
}
