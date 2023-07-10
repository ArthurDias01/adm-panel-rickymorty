import styled from "styled-components";
import Image from "next/image";

export const ImageContainer = styled(Image)`
  width: 22rem;
  height: 22rem;
  object-fit: cover;
  object-position: center center;
`
export const CardContainer = styled.article`
  width: 600px;
  height: 220px;
  display: flex;
  flex-direction: row;
  gap: .75rem;
  overflow: hidden;
  background: ${({ theme }) => theme.colors.neutral_600};
  border-radius: 0.5rem;
  margin: 0.75rem;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

  @media (max-width: ${({ theme }) => theme.screens.xs}) {
    flex-direction: column;
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
  font-weight: ${({ theme }) => theme.font.bold};
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
`;

export const CharacterStatusBadge = styled.span<{ status: "Alive" | "Dead" }>`
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
