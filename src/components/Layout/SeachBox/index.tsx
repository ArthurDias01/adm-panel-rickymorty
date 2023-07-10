import { Input, Space } from 'antd';
import { useId } from 'react';
const { Search } = Input;
import { Container } from './styled'

const onSearch = (value: string) => console.log(value);

export const SearchBox = () => {

  const Id = useId();

  return (
    <Container>
      <Search
        id={Id}
        placeholder="Search..."
        allowClear
        enterButton="Search"
        size="large"
        onSearch={onSearch}
      />
    </Container>
  )
}
