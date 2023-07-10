import styled from "styled-components";

//create header with styled componets
export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  padding: 0 5%;
  margin-bottom: 20px;
  gap: 2rem;
  background-color: ${({ theme }) => theme.colors.neutral_800};

  @media (max-width: ${({ theme }) => theme.screens.md}) {
    justify-content: space-between;
    padding: 10px 5%;
  }
`;
