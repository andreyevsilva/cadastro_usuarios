import React from 'react'

import { save } from '../../api/user'
import { connect } from 'react-redux'

import { alterarUsuario, alterarLista } from '../../store/actions/user'

const Form = (props) => {

    const { user, list } = props

    const handleClear = () => {
        props.setUser({ name: '', email: '' })
    }

    const handleUpdateField = (event) => {
        const user = { ...props.user }
        user[event.target.name] = event.target.value
        props.setUser(user)
    }


    const handleSaveUser = () => {
        const userState = user
            save(userState).then(res => {
                const listUpdated = getUpdateList(res.data)
                props.setUser({ name: '', email: '' })
                props.setList(listUpdated)
            }).catch(error => console.log(error))
    }

    const getUpdateList = (user, add = true) => {
        const listUpdate = list.filter(u => u.id !== user.id)
        if (add) {
            listUpdate.unshift(user)
        }
        return listUpdate
    }
    /**col-12 dispositivo pega 12 colunas no celular
     * col-md-6 dispositivo medio grande ou extra grande
     */
    return (
        <div className="form">
            <div className="row">
                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>Nome</label>
                        <input type="text" className="form-control" name="name" value={props.user.name || ''}
                            onChange={e => handleUpdateField(e)} placeholder="Digite o Nome..." />
                    </div>
                </div>

                <div className="col-12 col-md-6">
                    <div className="form-group">
                        <label>E-mail</label>
                        <input type="email" className="form-control" name="email" value={user.email || ''}
                            onChange={e => handleUpdateField(e)} placeholder="Digite o E-mail..." />
                    </div>
                </div>

                <hr />

                <div className="row">
                    <div className="col-12 d-flex justify-content-end">
                        <button className="btn btn-primary ml-3" onClick={handleSaveUser}>
                            Salvar
                            </button>

                        <button className="btn btn-secondary ml-2" onClick={handleClear}>
                            Cancelar
                            </button>

                    </div>
                </div>

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        user: state.user.user,
        list: state.user.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUser(user) {
            const action = alterarUsuario(user)

            dispatch(action)
        },
        setList(list) {
            const action = alterarLista(list)

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)