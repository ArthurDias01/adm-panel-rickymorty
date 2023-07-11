import { ICharacter } from '@/interfaces/ICharacter';
import { GetCharacter } from '../lib/graphql/characters'
import { useQuery } from '@apollo/client';

export interface IDataQueryResult {
  character: ICharacter;
}

interface IUseGetCharacterInput {
  id: string;
}

export const useGetCharacter = ({ id }: IUseGetCharacterInput) => {
  const { loading, error, data } = useQuery(GetCharacter, {
    variables: {
      id
    }
  });

  return {
    loading,
    error,
    data
  }
};
