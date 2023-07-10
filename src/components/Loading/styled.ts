import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: 80vh;
`;

export const Loader = styled.div`
  border-width: 0.5rem;
  border-style: solid;
  border-color: purple purple purple purple;
  width: 3.625rem;
  height: 3.625rem;
  border-radius: 50%;
  position: relative;
  -webkit-animation: spin 2s infinite;
  animation: spin 2s infinite;

  &:before,
  &:after {
    content: "";
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: purple;
    position: absolute;
    left: 0.125rem;
  }

  &:before {
    top: 0.063rem;
  }

  &:after {
    bottom: 0.063rem;
  }

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const LoaderContainerForLogo = styled.div`
  border-radius: 50%;
  position: relative;
  animation: spin 2s infinite;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 20rem;
  max-height: 20rem;
  height: 100%;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;
