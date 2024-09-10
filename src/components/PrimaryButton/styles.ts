import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.button`
  all: unset;

  display: flex;
  align-items: center;

  padding: 1rem 2rem;
  background-color: ${theme.colors.secondary};

  color: ${theme.colors.white};

  font-size: 1.25rem;


  border-radius: 2rem;
  box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.7), 6px 6px 12px rgba(189, 200, 223, 0.7);

  svg{
    margin-left: 1rem;
  }
`