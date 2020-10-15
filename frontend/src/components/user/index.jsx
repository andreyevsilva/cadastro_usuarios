import React from 'react'

import Main from '../view/Main'

import Form from './Form'
import Table from './Table'

const User = () =>{

    const headerProps = {
        icon: 'users',
        title: 'Usuários',
        subtitle: 'Cadastro de Usuários: Listar,Incluir,Alterar e Deletar'
    }
    
    return (
        <Main  {...headerProps}>
            <Form/>
            <Table/>
        </Main>
    )
}

export default User