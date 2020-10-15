import React, { useEffect } from 'react'

import {listAll,destroy} from '../../api/user'

import {connect} from 'react-redux'

import {alterarUsuario,alterarLista} from '../../store/actions/user'

const Table = (props) =>{

    const {list,setUser,setList} = props

    useEffect(() => { 
        listAll().then(res => {
            setList(res.data)
            console.log('Preenchendo a Lista')
        }).catch(error =>{
            console.log(error)
        })
    },[])/**Será executada apenas uma unica vez*/


    const handleLoadUser = (user) =>{
        setUser({...user})
    }

    const handleRemoveUser = (user) =>{
        const userState = user
        destroy(userState).then(res => {
            const listUpdated = list.filter(u => u.id !== user.id)
            props.setList(listUpdated)
        }).catch(error => console.log(error))
    }

    const renderRows = () =>{
        return list.map(user => {
            return (
                <tr key={user.id}>
                    <td>{user.name}</td> 
                    <td>{user.email}</td>
                    <td>
                        <button className="btn btn-warning"
                            onClick={() => handleLoadUser(user)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className="btn btn-danger ml-2"
                           onClick={() => handleRemoveUser(user)} >
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    return (
        <table className="table mt-4">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>
            </table>
    )
}

const mapStateToProps = state => {
    return{
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
        setList(list){
            const action = alterarLista(list)

            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Table)