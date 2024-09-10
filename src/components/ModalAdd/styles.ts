import styled from "styled-components";
import { theme } from "../../theme";


export const ModalContent = styled.div`
  padding: 2rem 1.5rem;
  background: #E9EAF0;

  &  > h3{
    display: flex;
    align-items: center;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin-bottom: 2.75rem;


    svg{
      margin-right: 0.5rem;
      color: ${theme.colors.secondary};
    }
  }

  .arrow-back{
    all: unset;

    cursor: pointer;
    position: relative;
    bottom: -0.3rem;
  }
`


export const FromToContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: 2.5rem;

`
export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 9rem;
  margin-bottom: 2.5rem;

  h3{
    font-size: 1.5rem;
    color: ${theme.colors.secondary};
  }
`

export const Table = styled.div`
  width: 100%;
  
  div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;

    input{
      width: 328px;
      height: 56px;

      outline: none;
      border: none;

      display: flex;
      align-items: center;

      padding-left: 2rem;

      color: ${theme.colors.tertiary};
      font-weight: bold;

      background: #E9EAF0;
      box-shadow: inset -8px -8px 16px rgba(255, 255, 255, 0.7), inset 8px 8px 16px rgba(189, 200, 223, 0.7);
      border-radius: 40px;

      &::placeholder{
        color: ${theme.colors.tertiary};
      }
    }
  }
`

export const ButtonArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  `
