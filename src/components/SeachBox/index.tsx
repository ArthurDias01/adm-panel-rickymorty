import { Input } from 'antd';
import { useEffect, useId, useState } from 'react';
const { Search } = Input;
import { Container, Anchor } from './styles'
import { useSearch } from '@/context/SearchContext';
import { DownOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';


export const SearchBox = () => {
  const { setSearch, setSearchByStatus, searchByStatus, setPage } = useSearch();
  const [searchValue, setSearchValue] = useState('');
  const [searchBy, setSearchBy] = useState<"Name" | "Status">('Name');

  const Id = useId();

  const onSearch = (value: string) => {
    setSearch(value);
  }

  useEffect(() => {
    // setIsSearching(true);
    const handler = setTimeout(() => {
      setSearch(searchValue);
      setPage(1);
      // setIsSearching(false);
    }, 700);

    return () => {
      clearTimeout(handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const searchByOptions: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p>
          Name
        </p>
      ),
      onClick: () => {
        setSearchBy('Name');
        setSearchByStatus(null);
      }
    },
    {
      key: '2',
      label: (
        <p>
          Status
        </p>
      ),
      onClick: () => {
        setSearchBy('Status');
      }
    },
    {
      key: '3',
      label: (
        <p>
          Clear Search
        </p>
      ),
      onClick: () => {
        setSearchBy('Name');
        setSearchValue('');
        setSearchByStatus(null);
      }
    },
  ];

  const searchByStatusOptions: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <p>
          Alive
        </p>
      ),
      onClick: () => {
        setSearchByStatus('Alive');
        setPage(1);
      }
    },
    {
      key: '2',
      label: (
        <p>
          Dead
        </p>
      ),
      onClick: () => {
        setSearchByStatus('Dead');
        setPage(1);
      }
    },
    {
      key: '3',
      label: (
        <p>
          unknown
        </p>
      ),
      onClick: () => {
        setSearchByStatus('unknown');
        setPage(1);
      }
    },
    {
      key: '4',
      label: (
        <p>
          Clear Search
        </p>
      ),
      onClick: () => {
        setSearchBy('Name');
        setSearchValue('');
        setSearchByStatus(null);
      }
    },
  ];

  return (
    <Container>

      {
        searchBy === 'Name' ?
          <Search
            id={Id}
            placeholder="Search..."
            allowClear
            size="large"
            onSearch={onSearch}
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
            style={{ width: '50%' }}
          />
          :
          <Dropdown menu={{ items: searchByStatusOptions }} placement="bottomRight" arrow>
            <Space>
              <Anchor onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
                Status: {searchByStatus}
                <DownOutlined style={{ display: 'inline-flex', alignItems: 'center', fontSize: '1.5rem', marginTop: '.5rem' }} />
              </Anchor>
            </Space>
          </Dropdown>
      }

      <>
        <Dropdown menu={{ items: searchByOptions }} placement="bottomRight" arrow>
          <Space>
            <Anchor onClick={(e: React.MouseEvent<HTMLAnchorElement>) => e.preventDefault()}>
              Search by: {searchBy}
              <DownOutlined style={{ display: 'inline-flex', alignItems: 'center', fontSize: '1.5rem', marginTop: '.5rem' }} />
            </Anchor>
          </Space>
        </Dropdown>
      </>
    </Container>
  )
}
