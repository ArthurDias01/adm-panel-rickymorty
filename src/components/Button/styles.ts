import styled from 'styled-components';

export const StyledButton = styled.button`
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.border.radius};
  background-color: ${({ theme }) => theme.colors.neutral_600};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  align-self: center;
  outline: none;
  border:  1px solid ${({ theme }) => theme.colors.neutral_600};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral_700};
    border:  1px solid ${({ theme }) => theme.colors.neutral_700};
  }
`;
