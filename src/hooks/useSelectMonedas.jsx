import React from 'react'
import { useState } from 'react'
import styled from '@emotion/styled'

    const Label = styled.label`
        color: white ; 
        display: block;
        font-family: 'Playfair Display', serif;
        font-size: 24px;
        font-weight: 700;
        margin: 15px 0;
        text-align: center;
    `

const Select = styled.select`
    width: 100%;
    padding: 15px;
    font-size: 18px;
    border-radius: 6px;
    
`

    const useSelectMonedas = (label, opciones) => {

    const [state, setState]= useState('')

    const SelectMonedas = () => (
    
        <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={e => setState(e.target.value)}
        >
            <option value="">Seleccione</option>
            {opciones.map(opcion =>(
                <option
                    key={opcion.id}
                    value={opcion.id}
                >{opcion.nombre}</option>

            ))}
        </Select>
        </>
    )    
    return [state, SelectMonedas]
}

export default useSelectMonedas