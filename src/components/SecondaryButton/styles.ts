import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.button`
  all: unset;

  height: 4rem;
  padding: 0 2rem;

  box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.7), 6px 6px 12px rgba(189, 200, 223, 0.7);
  border-radius: 32px;

  display: flex;
  align-items: center;

  font-size: 1.25rem;

  cursor: pointer;

  color: ${theme.colors.tertiary};
  font-weight: 500;

  svg{
    margin-left: 1rem;
  }
` 