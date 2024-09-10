
import styled from "styled-components";
import { theme } from "../../theme";

export const Container = styled.section `
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;

    padding: 0 20px;
`

export const Form = styled.form `
   width: 352px;

   label {
    color: ${theme.colors.tertiary};
    font-size: .75rem;
    margin-left: 1.8rem;
   }

   input {
    display: block;
    width: 100%;
    border-radius: 2rem;
    padding: 1rem 2rem 1rem 4rem;
    border: none;
    font-size: 0.875rem;
    outline: none;
    box-shadow: 6px 6px 12px 0px #BDC8DFB2 inset, -6px -6px 12px 0px #FFFFFFB2 inset;
    margin-bottom: .6rem;
    color: ${theme.colors.tertiary};
    background: ${theme.colors.bg}; 
    
    &::placeholder {
        color: ${theme.colors.tertiary};
    }
   }

   button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    border-radius: 2rem;
    border: none;
    width: 100%;
    background: ${theme.colors.secondary};
    box-shadow: 6px 6px 12px 0px #BDC8DFB2, -6px -6px 12px 0px #FFFFFFB2;
    cursor: pointer;
    margin-top: 2.2rem;
    padding: 1rem 2rem;
    color: ${theme.colors.white};
    font-size: 1rem;
    img {
        width: 1.3rem;
    }
   }
`

export const InputContainer = styled.div`
    position: relative;

    img {
        position: absolute;
        bottom: 28%;
        left: 8%;
    }
    svg {
        position: absolute;
        bottom: 28%;
        left: 8%;
    }
`