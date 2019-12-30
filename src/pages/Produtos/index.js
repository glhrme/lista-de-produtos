import React, { useEffect, useState } from 'react'
import { Route, Link } from 'react-router-dom'
import axios from 'axios'

import ProdutosHome from '../../components/ProdutosHome'
import Categoria from '../../components/Categoria'

import './index.css'

function Produtos(props) {

    const [ categorias, setCategorias ] = useState([])
    const { url } = props.match

    useEffect(()=>{
        async function getCategorias() {
            const response = await axios.get('http://localhost:3301/categorias')
            setCategorias(response.data)
            console.log(response.data)
        }
        getCategorias()
    },[])

    

    return (
        <div className='row'>
            <div className='col-md-4'>
                <h3>Categorias</h3>
                { categorias.map( categoria => {
                    return (
                        <Link 
                            to={`${url}/categoria/${categoria.id}`} 
                            key={categoria.id}
                        >
                                {categoria.categoria}
                        </Link>
                    )
                }) }
            </div>
            <div className='col-md-8'>
                <h1>Produtos</h1>
                <Route exact path={url} component={ProdutosHome} />
                <Route exact path={url+'/categoria/:catId'} component={Categoria} />
            </div>
        </div>
    )
}

export default Produtos