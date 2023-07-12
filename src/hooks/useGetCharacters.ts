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
  page: number;
  name?: string | null;
  status: "Alive" | "Dead" | "unknown" | null;
}

export const useGetCharacters = ({ page = 1, name = null, status = null }: IUseGetCharactersInput) => {


  const { loading, error, data, refetch } = useQuery<IDataQueryResult>(GetCharacters, {
    variables: {
      page: page,
      name: name ? name : null,
      status: status ? status : null
    },
    fetchPolicy: "cache-first",
  });

  // console.log(`using query page:${page}`, data, name, loading);

  return {
    loading,
    error,
    data,
    refetch
  }
};
