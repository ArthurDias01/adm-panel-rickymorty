import { PaginationButton } from './styles'
interface PaginationItemProps {
  number: number;
  isCurrent?: boolean;
  onPageChange: (page: number) => void;
}

export function PaginationItem({ isCurrent = false, number, onPageChange }: PaginationItemProps) {
  if (isCurrent) {
    return (
      <PaginationButton isCurrent>{number}</PaginationButton>
    );
  }
  return (
    <PaginationButton onClick={() => onPageChange(number)} isCurrent={false}>{number}</PaginationButton>
  )
}
