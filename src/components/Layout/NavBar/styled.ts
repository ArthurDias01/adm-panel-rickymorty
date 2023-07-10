import styled from "styled-components";


export const StyledNavBar = styled.nav`
  display: none;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  padding: 2rem;
  font-size: ${({ theme }) => theme.font.sizes.large};
  font-weight: ${({ theme }) => theme.font.bold};

  @media (min-width: ${({ theme }) => theme.screens.md}) {
    display: flex;
  }
  `;
