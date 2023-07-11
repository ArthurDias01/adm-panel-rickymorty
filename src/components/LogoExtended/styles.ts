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
    a {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: center;
      justify-self: start;
      gap: 2rem;
    };
   h1 {
    font-size: ${theme.font.sizes.xsmall};
    @media (min-width: ${({ theme }) => theme.screens.lg}) {
      font-size: ${theme.font.sizes.medium};
    }
    @media (max-width: ${({ theme }) => theme.screens.md}) {
      display: none;
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      display: none;
    }
   }
  `;
