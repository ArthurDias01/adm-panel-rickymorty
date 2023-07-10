import styled from "styled-components";

export const ButtonGroup = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
align-self: center;
line-height: 1.625rem;
`;

export const PaginationButton = styled.button<{ isCurrent?: boolean }>`
  background-color: ${({ theme }) => theme.colors.neutral_700};
  color: ${({ theme, isCurrent }) =>
    isCurrent ? theme.colors.accent : theme.colors.neutral_100
  };
  border: none;
  cursor: pointer;
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  line-height: 1.625rem;
  padding: 1.25rem;
  margin: 0 0.5rem;
  border-radius: ${({ theme }) => theme.border.radius};
  transition: all 0.2s ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
  &:disabled {
    color: ${({ theme }) => theme.colors.neutral_400};
    cursor: not-allowed;
  }
`;


export const PaginationInfoContainer = styled.div`
  display: flex;
  margin: 2rem 1rem 2rem;
  align-items: center;
  justify-content: center;
  height: fit-content;
`;
