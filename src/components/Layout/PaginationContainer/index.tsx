import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const PaginationContainer = ({ children }: Props) => {

  return (
    <PaginationContainer>
      {children}
    </PaginationContainer>
  )
};
