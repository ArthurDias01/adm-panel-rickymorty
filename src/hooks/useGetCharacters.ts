import { ICharacter } from '@/interfaces/ICharacter';
import { GetCharacters } from '../lib/graphql/characters'
import { useQuery } from '@apollo/client';

export interface IDataQueryResult {
  characters: {
    info: {
      count: number;
      pages: number;
      next: number;
      prev: number;
    },
    results: ICharacter[]
  }
}

interface IUseGetCharactersInput {
  page?: number;
  name?: string | null;
}

export const useGetCharacters = ({ page, name = null }: IUseGetCharactersInput) => {
  const { loading, error, data } = useQuery(GetCharacters, {
    variables: {
      page: page ? page : 1,
      name: name ? name : null
    }
  });

  console.log("useGetCharacters -> error", JSON.stringify(
    error, null, 2
  ), data !== undefined ? data.characters.results : null, loading)

  return {
    loading,
    error,
    data
  }
};
