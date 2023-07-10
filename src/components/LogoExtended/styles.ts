import { theme } from "@/styles/theme";
import styled from "styled-components";

export const StyledLogoExtended = styled.div`
  display: flex;
  background: transparent;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  width: fit-content;

   h1 {
    font-size: ${theme.font.sizes.xsmall};
    @media (min-width: ${({ theme }) => theme.screens.md}) {
      font-size: ${theme.font.sizes.medium};
    }
    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${theme.font.sizes.large};
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      display: none;
    }
   }
  `;
