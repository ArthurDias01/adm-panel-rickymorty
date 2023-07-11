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
        };
      }
      :where(.light) {
        * {
          filter: invert(1);
        };
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

  .ant-btn-primary, .ant-btn,.ant-btn-default ,.ant-btn-lg ,.ant-btn-icon-only ,.ant-input-search-button {
    background-color: ${({ theme }) => theme.colors.neutral_600};
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral_700} !important;
    }
  }


.ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: ${({ theme }) => theme.colors.accent} !important;
  }

  .ant-input-affix-wrapper.ant-input-affix-wrapper-lg {
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.white};
    }
    &:focus-within {
      border: 2px solid ${({ theme }) => theme.colors.accent};
    }
  }
  .ant-modal-content,.ant-modal-title {
    background-color: ${({ theme }) => theme.colors.neutral_100} !important;
  }

  button.ant-btn.ant-btn-default{
    background-color: ${({ theme }) => theme.colors.neutral_300} !important;
    &:hover {
      background-color: ${({ theme }) => theme.colors.neutral_400} !important;
      border: 1px solid ${({ theme }) => theme.colors.neutral_400} !important;
      color: ${({ theme }) => theme.colors.neutral_950} !important;
    }
  }

  .ant-btn-default:not(:disabled):not(.ant-btn-disabled):hover {
    border-color: ${({ theme }) => theme.colors.neutral_400} !important;
  }

  .ant-input-suffix {
    /* filter: invert(.4) */
    svg {
      fill: ${({ theme }) => theme.colors.neutral_300} !important;
    }
  }

  .ant-switch.ant-switch-checked {
    background: ${({ theme }) => theme.colors.accent} !important;
  }
`;
