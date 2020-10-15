import React from 'react'

import Main from '../view/Main'

export default (props) =>{
    return(
      <Main icon="home" title="Início" subtitle="Seja Bem-Vindo!!!">
        <div className="display-4">
          Bem-Vindo!
          <p className="mb-0 lead">Sistema usado para simplificar o cadastro de Usuários</p>
          <hr/>
        </div>
      </Main>
    )
}