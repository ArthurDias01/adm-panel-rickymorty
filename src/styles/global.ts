import { createGlobalStyle, css } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ${({ theme }) => css`

      @media (prefers-color-scheme: light) {
        body {
          background-color: ${theme.colors.neutral_100};
          color: ${theme.colors.neutral_950};
        }
      }
      @media (prefers-color-scheme: dark) {
        body {
        background-color: ${theme.colors.neutral_900};
        color: ${theme.colors.white};
        }
        svg {
          fill: ${theme.colors.white};
          color: ${theme.colors.white};
        }
      }

    html {
      font-size: 62.5%;
    }

    body {
      font-size: ${theme.font.sizes.medium};
      max-width: 100vw;
      overflow-x: hidden;
      overflow-y: auto;
    }
  `}

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .ant-btn-primary {
    background-color: ${({ theme }) => theme.colors.neutral_600};
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral_700} !important;
    }
  }
  .ant-input-search :where(.css-dev-only-do-not-override-14wwjjs).ant-input-group .ant-input-affix-wrapper:not(:last-child) {
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.neutral_200};
    }
    &:focus-within {
      border: 2px solid ${({ theme }) => theme.colors.neutral_200};
    }
  }
`;
