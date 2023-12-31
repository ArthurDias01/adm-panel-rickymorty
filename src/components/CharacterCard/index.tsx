import { CardContainer, CardDescription, ImageContainer, CharacterLocation, CharacterLocationLabel, CharacterName, CharacterStatus, CharacterStatusBadge, Section, ExcludeFromListButton } from './styles'
import Link from 'next/link';
import { DeleteFilled } from '@ant-design/icons';

interface Props {
  id: string;
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  location: string;
  imgSrc: string;
  type: string;
  deleteFromList: (id: string) => void;
}


export const CharacterCard = ({ id, name, imgSrc, location, status, type, deleteFromList }: Props) => {
  return (
    <CardContainer>
      <Link href={`/character/${id}`}>
        <ImageContainer src={imgSrc} alt={`${name} - ${status} - ${type}`} width={220} height={220} />
      </Link>
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
          <ExcludeFromListButton onClick={() => deleteFromList(id)}>
            <DeleteFilled />
          </ExcludeFromListButton>
        </Section>
      </CardDescription>
    </CardContainer>
  )
}
