import styled from "styled-components";

//create a responsive grid with 4 columns for desktop, 2 columns for tablet and 1 column for mobile
export const Container = styled.div`
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3,minmax(min-content, 450px));
    @media (max-width: ${({ theme }) => theme.screens.lg}) {
      grid-template-columns: repeat(2, minmax(min-content, 450px));
    }
    @media (max-width: ${({ theme }) => theme.screens.xs}) {
      grid-template-columns: 1fr;
    }
`;
