import { Input, Space } from 'antd';
import { useId } from 'react';
const { Search } = Input;
import { Container } from './styled'
import { useSearch } from '@/context/SearchContext';
import { useDebounce } from '@/hooks/useDebounce';



export const SearchBox = () => {
  const { setSearch } = useSearch();

  const Id = useId();

  //wrap onSeach on useCallback
  const onSearch = (value: string) => {
    setSearch(value);
  }

  return (
    <Container>
      <Search
        id={Id}
        placeholder="Search..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
    </Container>
  )
}
