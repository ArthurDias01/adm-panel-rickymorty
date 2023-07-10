import { useDebounce } from '@/hooks/useDebounce';
import { createContext, useContext, useEffect, useState } from 'react';

interface ISearchContextProps {
  children: React.ReactNode;
}

interface ISearchContextData {
  search: string;
  setSearch: (search: string) => void;
  isSearching: boolean;
}

const SearchContext = createContext({} as ISearchContextData);

export function SearchProvider({ children }: ISearchContextProps) {
  const [search, setSearch] = useState('');
  const { debouncedValue, isSearching } = useDebounce(search, 700);
  return (
    <SearchContext.Provider value={{ search: debouncedValue, setSearch, isSearching }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext);
