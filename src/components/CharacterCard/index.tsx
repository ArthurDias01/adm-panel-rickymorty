import { CardContainer, CardDescription, ImageContainer, CharacterLocation, CharacterLocationLabel, CharacterName, CharacterStatus, CharacterStatusBadge, Section } from './styled'
interface Props {
  name: string;
  status: 'Alive' | 'Dead' | 'unknown';
  location: string;
  imgSrc: string;
  type: string;
}


export const CharacterCard = ({ name,imgSrc,location,status,type }: Props) => {
  return (
    <CardContainer>
      <ImageContainer src={imgSrc} alt={`${name} - ${status} - ${type}`} width={220} height={220}/>
      <CardDescription>
        <Section>
          <CharacterName>{name}</CharacterName>
          <CharacterStatus>
            <CharacterStatusBadge status='Alive' />
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
