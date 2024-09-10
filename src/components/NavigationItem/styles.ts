import styled from "styled-components";
import { theme } from "../../theme";

interface IProps {
  isActive: boolean;
}

export const Container = styled.ul<IProps>`
  margin-bottom: 1.5rem;

  &:last-child{
    margin-bottom: 0;
  }

  & > img{
    position: absolute;
    left: 0;

    margin-top: -5px;

    display: ${(props: IProps) => props.isActive ? 'inherit' : 'none'}; 
  }

`

export const Item = styled.li<IProps>`
  display: flex;
  align-items: center;

  list-style: none;

  font-weight: 600;
  
  font-size: 1.25rem;

  p{
    margin-left: 1rem;

    color: ${(props: IProps) => props.isActive ? theme.colors.secondary
    : theme.colors.tertiary};
  }
` 