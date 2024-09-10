import styled from "styled-components";
import { theme } from "../../theme";

export const ErrorContainer = styled.section`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img{
    margin-bottom: 3.12rem;
  }
  
  h1{
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    margin-bottom: 3.12rem;

    text-align: center;
  }
`