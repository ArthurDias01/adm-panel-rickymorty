import { createContext, useContext, useEffect, useState } from 'react';

interface ISearchContextProps {
  children: React.ReactNode;
}

interface ISearchContextData {
  search: string;
  setSearch: (search: string) => void;
  searchByStatus: "Alive" | "Dead" | "unknown" | null;
  setSearchByStatus: (searchByStatus: "Alive" | "Dead" | "unknown" | null) => void;
  page: number;
  setPage: (page: number) => void;
}

const SearchContext = createContext({} as ISearchContextData);

export function SearchProvider({ children }: ISearchContextProps) {
  const [search, setSearch] = useState('');
  const [searchByStatus, setSearchByStatus] = useState<"Alive" | "Dead" | "unknown" | null>(null);
  const [page, setPage] = useState(1);

  return (
    <SearchContext.Provider value={{ search, setSearch, searchByStatus, setSearchByStatus, page, setPage }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearch = () => useContext(SearchContext);
