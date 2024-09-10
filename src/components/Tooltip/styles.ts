import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.div`
  position: absolute;
  top: -3rem;

  padding: 0.5rem 1.5rem;

  background-color: ${theme.colors.secondary};

  font-size: 0.87rem;
  color: ${theme.colors.white};
  
  border-radius: 0.3rem;

  display: inline;

  &::before{
    content: "";

    width: 0; 
    height: 0; 
    border-left: 0.6rem solid transparent;
    border-right: 0.6rem solid transparent;
    
    border-top: 0.6rem solid ${theme.colors.secondary};

    position: absolute;
    bottom: -0.6rem;
    left: 50%;

    transform: translateX(-50%);
  }
`