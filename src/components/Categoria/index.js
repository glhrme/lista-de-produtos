import React, { useState, useEffect } from 'react'
import axios from 'axios'

function Categoria(props) {

    const [ produtos, setProdutos ] = useState([]) 
    const { catId } = props.match.params

    useEffect( ()=>{
        async function getProdutos(){
            const response = await axios.get(`http://localhost:3301/produtos?categoria=${catId}`)
            setProdutos(response.data)
        }
        getProdutos()
    }, [catId])

    return (
        <>
        <ul>
            {produtos.map(prod => {
                return (
                    <li key={prod.id}>{prod.produto}</li>
                )
            })}
        </ul>
        </>
    )
}

export default Categoria