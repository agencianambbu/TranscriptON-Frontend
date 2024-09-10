import React from 'react'
import styled from 'styled-components'
import {theme} from "../../theme"

const Logo = () => {
    const H1 = styled.h1`
    text-align: center;
    margin-bottom: 7rem;
    color: ${theme.colors.primary};
    font-weight: bold;
    span {
        color: ${theme.colors.secondary};
    }
`

return (
        <H1>tran<span>&lt;script&gt;</span>ON</H1>
    )
}

export default Logo
