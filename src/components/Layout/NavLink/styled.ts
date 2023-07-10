import styled from "styled-components";
import Link from "next/link";

export const StyledNavlink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  :hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;
