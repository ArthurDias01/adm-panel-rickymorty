import styled from 'styled-components';

export const ErrorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 36rem;
  max-height: 36rem;
  margin-bottom: 2rem;
`;

export const ErrorTitle = styled.h1`
  margin-top: 2rem;
  font-size: ${({ theme }) => theme.font.sizes.xlarge};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.red};
  margin-bottom: 1rem;
`;
