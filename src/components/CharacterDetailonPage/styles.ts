import styled from "styled-components";
import Image from "next/image";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  margin: 2rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.neutral_600};
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  align-self: center;
  max-width: 80rem;
  gap: 2rem;
  @media (min-width: 768px) {
    width: 90%;
  }
  @media (prefers-color-scheme: light) {
    background-color: ${({ theme }) => theme.colors.neutral_400};
    color: ${({ theme }) => theme.colors.white};
  }
`;

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  max-width: 30rem;
  object-fit: cover;
  object-position: center center;
  border-radius: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    max-width: 100%;
  }

`

export const CharacterLabel = styled.span`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.bold};

  @media (max-width: ${({theme}) => theme.screens.xs}) {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const CharacterDetailText = styled.p<{ status?: string }>`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  background-color: ${({ theme, status }) => status === "Alive" ? theme.colors.green : status === "Dead" ? theme.colors.red : status === 'unknown' ? theme.colors.neutral_400 : 'transparent'};
  padding: 0.5rem;
  border-radius: ${({ theme, status }) => status !== undefined ? theme.border.radius : 0};



  animation: ${({ status }) => status ? 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;' : 'none'};
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: .5;
    }
  }

  @media (max-width: ${({theme}) => theme.screens.xs}) {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const CharacterName = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.normal};

  @media (max-width: ${({theme}) => theme.screens.xs}) {
    font-size: ${({ theme }) => theme.font.sizes.small};
  }
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 60%;
  justify-content: space-between;

  @media (max-width: ${({theme}) => theme.screens.xs}) {
    width: 100%
  }
  `;
