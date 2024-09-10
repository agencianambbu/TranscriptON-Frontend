import styled from "styled-components";
import { theme } from "../../theme";

export const Result = styled.div`
  width: 100%;
  max-height: 465px;

  overflow-y: scroll;

  padding: 1rem;
  box-shadow: -6px -6px 12px rgba(255, 255, 255, 0.7), 6px 6px 12px rgba(189, 200, 223, 0.7);
  border-radius: 20px;

  margin-bottom: 3rem;

  p{
    color: ${theme.colors.tertiary};
    margin-bottom: 2rem;
  }
`

export const Actions = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

`

export const TooltipArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
`

export const AudioContainer = styled.div`
  margin-bottom: 2rem;
  margin-top: 4rem;
  width: 100%;
  
  & > div{
    max-width: 100%;
    width: 100%
  }
`

export const ResultText = styled.div`
  margin-bottom: 4rem;


  .jodit-workplace{
    max-height: 370px !important; 
  }

`