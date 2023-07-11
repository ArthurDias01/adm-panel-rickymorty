import styled from "styled-components";
import Link from "next/link";

export const StyledNavlink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.colors.darkAccent};
    }
  }
`;
