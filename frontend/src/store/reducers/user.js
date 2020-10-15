import { USUARIO_ALTERADO, LISTA_ALTERADA } from '../actions/actionTypes'

//Estado Inicial
const initialState = {
    user: {
        name: '',
        email: ''
    },
    list: [],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case USUARIO_ALTERADO:
            return {
                ...state,
                user: action.payload
            }
        case LISTA_ALTERADA:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state
    }
}

export default reducer 