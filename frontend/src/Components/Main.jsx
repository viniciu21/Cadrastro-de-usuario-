import React from 'react'
import Header from './Header'
import './Main.css'

function Main(props){
    return(
        <React.Fragment>
            <Header/>
            <main className="content"> Conteudo </main>
        </React.Fragment>
    )
}

export default Main