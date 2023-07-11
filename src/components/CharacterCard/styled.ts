import styled from "styled-components";
import Image from "next/image";

export const ImageContainer = styled(Image)`
  width: 100%;
  height: 100%;
  aspect-ratio: 1/1;
  max-width: 20rem;
  object-fit: cover;
  object-position: center center;
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    max-width: 100%;
  }
`
export const CardContainer = styled.article`
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: row;
  gap: .75rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.neutral_600};
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  align-self: center;
  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    flex-direction: column;
    height: 100%;
    width: 100%;
    max-width: 36rem;
  }
`

export const CardDescription = styled.div`
  flex: 3 1 0%;
  position: relative;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
`

export const CharacterName = styled.h2`
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.black};
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`

export const CharacterLocationLabel = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.neutral_300};
`

export const CharacterLocation = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.normal};
`;

export const CharacterStatus = styled.p`
  font-size: ${({ theme }) => theme.font.sizes.xsmall};
  font-weight: ${({ theme }) => theme.font.bold};
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const CharacterStatusBadge = styled.span<{ status: "Alive" | "Dead" | "unknown" }>`
  display: inline-block;
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  background-color: ${({ theme, status }) => {
    if (status === "Alive") return theme.colors.green;
    if (status === "Dead") return theme.colors.red;
    return theme.colors.neutral_300;
  }
  };
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 0%;
`;

export const ExcludeFromListButton = styled.button`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.neutral_600};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out 0s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral_700};
  }
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.accent};
  }
  &:active {
    transform: scale(0.95);
  }
  svg {
    width: 2rem;
    height: 2rem;
    fill: ${({ theme }) => theme.colors.neutral_100};
  }
`;
