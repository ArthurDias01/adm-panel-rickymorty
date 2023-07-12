import { ICharacter } from '@/interfaces/ICharacter';
import { GetCharacter } from '../lib/graphql/characters'
import { useQuery } from '@apollo/client';

export interface IDataQueryCharacterResult {
  character: ICharacter;
}

interface IUseGetCharacterInput {
  id: string;
}

export const useGetCharacter = ({ id }: IUseGetCharacterInput) => {
  const { loading, error, data } = useQuery<IDataQueryCharacterResult>(GetCharacter, {
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
