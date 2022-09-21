import React from 'react'
import styled from '@emotion/styled'

const Texto = styled.div`
    background-color: #a53333;
    color: white;
    padding: 15px;
    font-size: 22px;
    text-transform: uppercase;
    font-family: 'Playfair Display', serif;
    font-weight: 700;
    text-align: center;
    border-radius: 6px;
`
const Error = ({children}) => {
    return (
        <Texto>{children}</Texto>
    )
    }

export default Error