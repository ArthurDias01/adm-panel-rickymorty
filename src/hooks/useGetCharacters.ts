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




export const useGetCharacters = (page: number | undefined) => {
  const { loading, error, data } = useQuery(GetCharacters, {
    variables: {
      page: page ? page : 1
    }
  });

  return {
    loading,
    error,
    data
  }
};
