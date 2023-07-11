import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 45rem;
`;

export const Anchor = styled.a`
  font-size: 2rem;
  display: inline-flex;
  gap: 1rem;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    @media (prefers-color-scheme: light) {
      color: ${({ theme }) => theme.colors.darkAccent};
    }
  }
`;
