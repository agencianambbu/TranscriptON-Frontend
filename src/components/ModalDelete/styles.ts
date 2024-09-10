import styled from "styled-components";
import { theme } from "../../theme";

export const ModalContent = styled.div`
  padding: 1.5rem;

  background: #E9EAF0;


  &  > h3{
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.colors.primary};
    font-size: 1.5rem;
    margin: 0 auto;
    margin-bottom: 1rem;
  }

  & > p {
    color: ${theme.colors.tertiary};
    text-align: center;
    margin-bottom: 1rem;
  }

  & > div{
    display: flex;

    button:first-child{
      margin-right: 1rem;
    }
  }


`

