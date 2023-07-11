import { CharacterCard } from '@/components/CharacterCard';
import { List } from '@/components/Layout/List'
import { Pagination } from '@/components/Pagination';
import { IDataQueryResult, useGetCharacters } from '@/hooks/useGetCharacters'
import { ICharacter } from '@/interfaces/ICharacter';
import Head from 'next/head'
import { useEffect, useState } from 'react';
import { Error } from '@/components/Layout/Error';
import { Loading } from '@/components/Loading';
import { useSearch } from '@/context/SearchContext';
import { ZeroFound } from '@/components/Layout/ZeroFound';
import { DeleteModal } from '@/components/DeleteModal';
import { createPortal } from 'react-dom';
// import { Pagination, PaginationProps } from 'antd';
// import { PaginationContainer } from '@/components/Layout/PaginationContainer';



export default function Home() {

  const { search, searchByStatus, page, setPage } = useSearch();
  const { data, error, loading } = useGetCharacters({ page, name: search, status: searchByStatus });
  const [deleteId, setDeleteId] = useState<string | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletedIds, setDeletedIds] = useState<string[]>([]);
  const [filteredData, setFilteredData] = useState<{ data: IDataQueryResult }>();

  const handleClosedModal = () => {
    setShowDeleteModal(false);
    setDeleteId(null);
  }

  const handleDelete = async () => {
    setShowDeleteModal(false);
    setDeleteId(null);
    const alreadyDeleted = localStorage.getItem('deleted') || '[]';
    localStorage.setItem('deleted', JSON.stringify([...JSON.parse(alreadyDeleted), deleteId]));
  }

  const handleOpenModal = (id: string) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  }


  useEffect(() => {
    const deletedIds = JSON.parse(localStorage.getItem('deleted') || '[]') as string[];
    setDeletedIds(deletedIds);
    if (loading === false && !error) {
      setFilteredData({
        data: {
          characters: {
            info: {
              ...data.characters.results.info,
              pages: Math.floor(data.characters.info.pages - deletedIds.length / 20),
              count: data.characters.info.count - deletedIds.length,
            },
            results: data.characters.results.filter((character: ICharacter) => {
              return !deletedIds.includes(character.id)
            })
          }
        }
      }
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deleteId, error, loading, page])



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
          {!error && !loading && filteredData?.data.characters?.results?.filter((character: ICharacter) => {
            return !deletedIds.includes(character.id)
          }).map((character: ICharacter) =>
            <CharacterCard
              key={character.id}
              id={character.id}
              imgSrc={character.image}
              name={character.name}
              type={character.species}
              location={character.location.name}
              status={character.status}
              deleteFromList={handleOpenModal}
            />
          )}
        </List>
      }

      {
        !error && !loading && data?.characters?.info?.pages >= 1 &&
        <Pagination
          onPageChange={setPage}
          totalCountOfRegisters={data.characters.info.count - deletedIds.length}
          currentPage={page}
          registersPerPage={20}
          onNextPage={() => setPage(page + 1)}
          onPreviousPage={() => setPage(page - 1)}
          hasNextPage={data.characters.info.next !== null}
        />
        // <PaginationContainer>
        //   <Pagination
        //     size="default"
        //     total={data.characters.info.count}
        //     current={page}
        //     defaultPageSize={20}
        //     onChange={setPage}
        //     defaultCurrent={1}
        //     showTotal={showTotal}
        //   />
        // </PaginationContainer>
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
      {showDeleteModal ?
        createPortal(
          <DeleteModal
            handleCancel={handleClosedModal}
            handleOk={handleDelete}
            modalOpen={showDeleteModal}
          />,
          document.body
        )
        :
        null
      }
    </>
  )
}
