import http from '../utils/http'

/**
 * pode colocar o export default APIuser abaixo, eu retirei por opção.
 */
//export default APIuser

export const listAll = async () =>{
    try{
        const user = await http.get('/users')
        return user
    }catch(error){
        throw error
    }
}

export const save = async (data) =>{
    try{
        const user = (data.id == null) ? await http.post('/users',data) : await http.put(`/users/${data.id}`,data)
        return user
    }catch(error){
        throw error
    }
}

export const destroy = async (data) =>{
    try{
        const user = await http.delete(`/users/${data.id}`,data)
        return user
    }catch(error){
        throw error
    }
}
