import styled from "styled-components";

//create header with styled componets
export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.neutral_900};
  padding: 10px 5%;
  margin-bottom: 20px;
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  img {
    width: 200px;
  }
  nav {
    ul {
      display: flex;
      li {
        margin-left: 20px;
        a {
          color: #fff;
          text-decoration: none;
          &:hover {
            color: #ccc;
          }
        }
      }
    }
  }
`;
