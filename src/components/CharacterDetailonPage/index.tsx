import { ReactNode } from "react";
import { Container, ImageContainer, CharacterName, CharacterLabel, DetailWrapper, CharacterDetailText } from "./styled";
import { ICharacter } from "@/interfaces/ICharacter";

interface Props {
  character: ICharacter;
}

export const CharacterDetailonPage = ({ character }: Props) => {

  return (
    <Container>
      <ImageContainer src={character.image} alt={character.name} width={400} height={400} />

      <DetailWrapper>
        <CharacterLabel>Name:</CharacterLabel> <CharacterName>{character.name}</CharacterName>
      </DetailWrapper>

      <DetailWrapper>
        <CharacterLabel>Status:</CharacterLabel> <CharacterDetailText status={character.status}>{character.status}</CharacterDetailText>
      </DetailWrapper>

      <DetailWrapper>
        <CharacterLabel>Location:</CharacterLabel> <CharacterDetailText>{character.location.name}</CharacterDetailText>
      </DetailWrapper>

      <DetailWrapper>
        <CharacterLabel>Scpecies:</CharacterLabel> <CharacterDetailText>{character.species}</CharacterDetailText>
      </DetailWrapper>

      <DetailWrapper>
        <CharacterLabel>Origin:</CharacterLabel> <CharacterDetailText>{character.origin?.name}</CharacterDetailText>
      </DetailWrapper>

    </Container>
  )
}
