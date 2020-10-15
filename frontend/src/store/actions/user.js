import {USUARIO_ALTERADO,LISTA_ALTERADA} from './actionTypes'

export const alterarUsuario = (user) =>{
    return {
        type:USUARIO_ALTERADO,
        payload:user
    }
}

export const alterarLista = (list) =>{
    return {
        type:LISTA_ALTERADA,
        payload:list
    }
}