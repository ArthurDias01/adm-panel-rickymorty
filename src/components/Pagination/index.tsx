import { PaginationItem } from "./PaginationItem";
import { ButtonGroup, PaginationButton, PaginationInfoContainer } from './styled'

interface PaginationProps {
  totalCountOfRegisters: number;
  registersPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  onNextPage?: () => void;
  onPreviousPage?: () => void;
  hasNextPage: boolean;
}

const siblingsCount = 2;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)].map(
    (_, index) => {
      return from + index + 1
    }).filter((page) => page > 0) //filtro pra retirar páginas calculadas com índices negativos
}

export const Pagination = ({
  totalCountOfRegisters,
  registersPerPage = 20,
  currentPage = 1,
  onPageChange,
  onNextPage,
  onPreviousPage,
  hasNextPage = true,
}: PaginationProps) => {

  const lastPage = Math.ceil(totalCountOfRegisters / registersPerPage);

  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []
  const nextPages = currentPage < lastPage
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
    : []

  return (
    <ButtonGroup>
      <PaginationInfoContainer>
        <strong>{currentPage === 1 ? 1 : (currentPage - 1) * registersPerPage + 1} </strong>
        <strong>{'\xa0 to '}{currentPage * registersPerPage > totalCountOfRegisters ? totalCountOfRegisters : currentPage * registersPerPage}
        </strong>
        <strong style={{ marginLeft: '1rem' }}> of {totalCountOfRegisters} total</strong>
      </PaginationInfoContainer>

      {onPreviousPage &&
        <PaginationButton disabled={currentPage === 1} onClick={onPreviousPage}>Prev</PaginationButton>
      }
      {currentPage > (1 + siblingsCount) && (
        <>
          <PaginationItem key={1} number={1} onPageChange={onPageChange} />
          {currentPage > (2 + siblingsCount) &&
            <PaginationButton disabled>...</PaginationButton>
          }
        </>
      )}

      {previousPages.length > 0 && previousPages.map(page => {
        return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
      })}


      <PaginationItem number={currentPage} isCurrent onPageChange={onPageChange} />

      {nextPages.length > 0 && nextPages.map(page => {
        return <PaginationItem key={page} number={page} onPageChange={onPageChange} />
      })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage &&
            <PaginationButton disabled>...</PaginationButton>
          }
          <PaginationItem key={lastPage} number={lastPage} onPageChange={onPageChange} />
        </>
      )}

      <PaginationButton onClick={onNextPage} disabled={!hasNextPage}>Next</PaginationButton>
    </ButtonGroup>
  )
}
