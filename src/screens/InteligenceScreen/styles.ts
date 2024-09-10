import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section`
  max-width: ${theme.sizes.container};
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  h1{
    font-size: 2.25rem;
    color: ${theme.colors.primary};

    margin-bottom: 5rem;
  }
`

export const InfoContainer = styled.div`
  text-align: center;
  margin-bottom: 4rem;


  h1{
    font-size: 2.1rem;
    color: ${theme.colors.primary};
    font-weight: 700;

    margin-bottom: 2rem;
  }

  p{
    font-size: 0.87rem;
    color: ${theme.colors.tertiary};
  }

  span{
    font-weight: bold;
  }
`

export const Tip = styled.div`
  padding: 2.5rem 2rem;
  max-width: 561px;
  margin-bottom: 4rem;

  background: #E9EAF0;
  box-shadow: inset -6px -6px 12px rgba(255, 255, 255, 0.7), inset 6px 6px 12px rgba(189, 200, 223, 0.7);
  border-radius: 24px;

  display: flex;
  align-items: center;

  h2{
    font-weight: bolder;
    color: ${theme.colors.tertiary};
  }

  p{
    color: ${theme.colors.tertiary};
    font-size: 0.87rem;

    span{
      color: ${theme.colors.secondary};
      font-weight: bold;
    }
  }

  div{
    margin-left: 1.5rem;
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
  margin-bottom: 2.5rem;

  h3{
    font-size: 1.5rem;
    color: ${theme.colors.secondary};
  }

  & > h3:first-child{
    position: relative;
    right: -10rem;
  }

  & > h3:last-child{
    position: relative;
    left: -13rem;
  }
`

export const Table = styled.div`
  width: 100%;
  max-height: 25vh;
  overflow-y: scroll;

  & > div{
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    padding-right: 1rem;

    .delete{
      opacity: 0;
      cursor: pointer;
      transition: 0.300s;
    }

    &:hover > .delete{
      opacity: 1;
      color: ${theme.colors.tertiary};
    }
  }
  
  & > div > div{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    margin    : 0 1rem ;

    p{
      width: 328px;
      height: 56px;

      display: flex;
      align-items: center;

      padding-left: 2rem;

      color: ${theme.colors.tertiary};
      font-weight: bold;

      background: #E9EAF0;
      box-shadow: inset -8px -8px 16px rgba(255, 255, 255, 0.7), inset 8px 8px 16px rgba(189, 200, 223, 0.7);
      border-radius: 40px;
    }

    
  }

 


`