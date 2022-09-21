import styled from '@emotion/styled'
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/imagen-criptos.png'


const Contenedor = styled.div`
max-width:900px;
margin: 0 auto; 
width: 90%;
@media (min-width: 992px){
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 2rem; 
}
`
const Imagen = styled.img`
max-width:400px;
width:80%;
margin: 100px auto 0 auto;
display:block; 
`

const Heading =styled.h1`
font-family: 'Playfair Display', serif;
color : #FFF; 
text-align: center;
font-weight: 700;
margin-top: 80px;
margin-bottom: 50px;
font-size: 34px;

&::after{
  content: '';
  width: 100px;
  height: 6px;
  background-color: #134c8a;
  display: block;
  margin: 10px auto 0 auto;
}
`

function App() {
  
  const [monedas, setMonedas] =useState({})
  const [resultado, setResultado] = useState({})
  const [cargando, setCargando] = useState(false);//esto

  useEffect(() => {
  if(Object.keys(monedas).length>0){

      const cotizarCripto =async () =>{
        setCargando(true)
        setResultado({})

        const {moneda, criptomoneda} = monedas
        const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`
        // la url original era https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC&tsyms=USD pero se cambió a las variables para que puedan tomar el valor que el cliente decida 

        // le vamos a hacer fetch para extraer los datos 
        const respuesta = await fetch(url)
        const resultado = await respuesta.json()
  //le voy a inyectar en el objeto dde forma dinamica los valores que tengo en moneda y criptomoneda
  // se usa una sintaxis para acceder a bjetos que no es muy comun pero viene bien de está forma []
  // console.log(resultado.DISPLAY [criptomoneda][moneda]); esto se pasa arriba a un state nuevo resultado, setResultado y como es tanta info se almacenará en un objeto que empezará vacío y se cambia el clg a :
        setResultado(resultado.DISPLAY [criptomoneda][moneda])
        setCargando(false)
      }
    cotizarCripto()
  }
  },[monedas]) 
  // el arreglo de dependencias osea el [] es que está escuchando o velando por los cambios que ocurran dentro de la variable que se coloque ahí, en este caso monedas
// prevenimos que se ejecute cuando no tenga nada con el if(Object"es porq es un objeto ".keys(monedas).length>0){}, esto significa que ya hay algo 
  return (
    <Contenedor>
      <Imagen
        src={ImagenCripto}
        alt="imagenes de simbolos de algunas criptomonedas"
        />
        <div>
          <Heading>Cotiza criptomonedas <br/>
            ¡Al instante!</Heading>

          <Formulario
          setMonedas={setMonedas}
          />
          {cargando && <Spinner/>}

          {/* como lo que está en Resultado.jsx se muestra de una si se pone como se ha puesto el resto <Resultado/> lo que se hace es una confirmación, de que cuando se tenga una propiedad del 2do state como PRICE  entonces si se puede ejecutar resultado   */}
          {resultado.PRICE && <Resultado 
          resultado={resultado}/> }
        </div>


  </Contenedor>

  )
}

export default App

