import { CharacterCard } from '@/components/CharacterCard';
import { List } from '@/components/Layout/List'
// import { Pagination } from '@/components/Pagination';
import { useGetCharacters } from '@/hooks/useGetCharacters'
import { ICharacter } from '@/interfaces/ICharacter';
import Head from 'next/head'
import { useState } from 'react';
import { Error } from '@/components/Layout/Error';
import { Loading } from '@/components/Loading';
import { useSearch } from '@/context/SearchContext';
import { ZeroFound } from '@/components/Layout/ZeroFound';
import { Pagination } from 'antd';
import { PaginationContainer } from '@/components/Layout/PaginationContainer';

export default function Home() {

  const [page, setPage] = useState(1);
  const { search } = useSearch();
  const { data, error, loading } = useGetCharacters({ page, name: search });

  // console.log(loading === false && error === undefined ? data.characters.results : 'error')

  return (
    <>
      <Head>
        <title>Ricky and Morty Panel</title>
        <meta name="description" content="Test - Use Ricky Morty Api - Datlo" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {
        loading ?
          <Loading /> : null
      }
      {loading === false && !error && data?.characters?.results.length > 0 &&
        <List>
          {!error && !loading && data?.characters?.results?.map((character: ICharacter) =>
            <CharacterCard
              key={character.id}
              id={character.id}
              imgSrc={character.image}
              name={character.name}
              type={character.species}
              location={character.location.name}
              status={character.status}
            />
          )}
        </List>
      }

      {
        !error && !loading && data?.characters?.info?.pages >= 1 &&
        // <Pagination
        //   onPageChange={setPage}
        //   totalCountOfRegisters={data.characters.info.count}
        //   currentPage={page}
        //   registersPerPage={20}
        //   onNextPage={() => setPage(page + 1)}
        //   onPreviousPage={() => setPage(page => page - 1)}
        //   hasNextPage={data.characters.info.next !== null}
        // />
        <PaginationContainer>
          <Pagination
            defaultCurrent={1}
            total={data.characters.info.count}
            current={page}
            onChange={setPage}
            defaultPageSize={20}
            showSizeChanger={false}
          />
        </PaginationContainer>
      }
      {
        error ? <Error /> : null
      }
      {
        !error && !loading && data?.characters?.results.length === 0 &&
        <ZeroFound>
          <h1>No Character Found with this filter</h1>
        </ZeroFound>
      }
    </>
  )
}
