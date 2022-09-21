import React from 'react'
import { useEffect , useState} from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
background-color: #4993e3; 
border: none;
width: 100%;
padding: 10px;
color: white;
text-transform: uppercase;
font-weight: 700;
font-size: 20px;
border-radius: 6px;
transition: background-color .3s ease ;
margin-top: 30px;

&:hover{
    background-color: #134c8a;
    cursor: pointer;
}
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] =useState([])
    const [error, setError] =useState(false)

    const [moneda, SelectMonedas] = useSelectMonedas('Selecciona la moneda que quiera cotizar', monedas)
// ese moneda es el mismo state que se está exportando en useSelectMoneda solo que como es un array destructuring puedes cambiarle el nombre segun quieras
// como se está usando array destructuring no importa que se esté retornando desde useSelectMonedas como state, selectMoneda porq se retorna por la posicion justo en ese orden 

const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Selecciona la Criptomoneda',criptos)
// las opciones son las criptos, una vez que se consulta la API se pasa a la variable cripto

// Extrayendo la API 
    useEffect(()=>{
            const consultarAPI = async ()=>{
                const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD"
                const respuesta =  await fetch(url)
                const resultado=  await respuesta.json()
                

                const arrayCriptos = resultado.Data.map(cripto => {
                    const objeto = {
                        id: cripto.CoinInfo.Name,
                        nombre: cripto.CoinInfo.FullName
                    }
                    return objeto
                    // console.log(objeto);
                    
                })
                setCriptos(arrayCriptos)
                // console.log(arrayCriptos);
            }
            consultarAPI()
    },[])

    const handleSubmit = e =>{
        e.preventDefault()

        if ([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }
    setError(false)
    setMonedas({
        moneda, 
        criptomoneda
    })
    }
    return (
    <>
{/* // si error está como true entonces se hace e importa un nuevo componente de error, el cual se leerá un parrafo que diga todos los componentes son obligatorios */}
    {error && <Error>Todos los campos son obligatorios</Error>}
        <form
            onSubmit={handleSubmit}
        >

            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit 
            type="submit" 
            value="Cotizar" />
        </form>
    </>
    )
}

export default Formulario