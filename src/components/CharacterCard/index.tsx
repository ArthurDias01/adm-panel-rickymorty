import { CardContainer, CardDescription, ImageContainer, CharacterLocation, CharacterLocationLabel, CharacterName, CharacterStatus, CharacterStatusBadge, Section } from './styled'
import Link from 'next/link';

interface Props {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  location: string;
  imgSrc: string;
  type: string;
}


export const CharacterCard = ({ id, name, imgSrc, location, status, type }: Props) => {
  return (
    <CardContainer>
      <ImageContainer src={imgSrc} alt={`${name} - ${status} - ${type}`} width={220} height={220} />
      <CardDescription>
        <Section>
          <Link href={`/character/${id}`}>
            <CharacterName>{name}</CharacterName>
          </Link>
          <CharacterStatus>
            <CharacterStatusBadge status={status} />
            <span>{`${status} - ${type}`}</span>
          </CharacterStatus>
        </Section>
        <Section>
          <CharacterLocationLabel>Last known location:</CharacterLocationLabel>
          <CharacterLocation>{location}</CharacterLocation>
        </Section>
      </CardDescription>
    </CardContainer>
  )
}
