import React from 'react'
import styled from '@emotion/styled'

const Contenedor = styled.div`
    color: white;
    font-family: 'Playfair Display', serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`
const Imagenn = styled.img`
    display: block;
    width: 70px;

`
const Texto = styled.p`
    font-size: 20px;
    text-align: justify;
    span{
        font-size: 700;
    }   
`

const Precio = styled.p`
    font-size: 27px;
    text-align: center;
    spaan{
        font-size: 700;
    }
`
const Resultado = ({resultado}) => {
    // Se extraen los datos que vamos a necesitar en especifico
    const{PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE}= resultado
    return (
        
        <Contenedor>
            
            <div>
            <Precio>El precio es de :<span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día es de: <span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día es de: <span>{LOWDAY}</span></Texto>
                <Texto>La variaciación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
            </div>
            <Imagenn 
            src={`https://cryptocompare.com/${IMAGEURL}`} 
            alt="Imagen de la cripto"
            />
            
        </Contenedor>
    )
}

export default Resultado