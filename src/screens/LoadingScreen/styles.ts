import styled from "styled-components";
import { theme } from "../../theme";

export const Loading = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  margin-bottom: 5rem;

  h1{

    color: ${theme.colors.primary};

    margin-top: 3.5rem;
    margin-bottom: 1.5rem;

    font-size: 2.25rem;
  }

  p{
    color: ${theme.colors.tertiary};

    font-size: 1.5rem;
  }
`

export const Info = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;

  color: ${theme.colors.tertiary};

  img{
    margin-bottom: 1.5rem;
  }

  h3{
    font-size: 1.5rem;
  }

  p{
    font-size: 1rem;
  }
`