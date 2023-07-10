import styled from "styled-components";

//create a responsive grid with 4 columns for desktop, 2 columns for tablet and 1 column for mobile
export const Container = styled.article`
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1920px;
  /* grid-template-columns: repeat(4, 1fr); // Default: 4 columns */
  /* @media (max-width: ${({ theme }) => theme.screens.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    grid-template-columns: 1fr;
  } */
`;
