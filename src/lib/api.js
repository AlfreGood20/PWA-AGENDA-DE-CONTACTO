import axios from 'axios';
import { Login } from './js/clases';
import { contacto } from './js/clases';
import { Usuario } from './js/clases';

const API_URL = import.meta.env.VITE_API_URL;

/**
 * @type {string}
 */
let token;

const apiClient = axios.create({
    baseURL: API_URL,
})

/**
 * @param {Login} request
 */
export async function postLogin(request) {

    const response = await apiClient.post('/auth',request);

    token = response.data.token;
    return response.data;
}


/**
 * @param {Usuario} request 
 */
export async function postUsuario(request) {
    try {
        const reponse = await apiClient.post(`/usuario`,request,)
        return reponse;
    } catch (error) {
        throw error;
    }
}

export async function getPefil() {
    return null;
}

// CONTACTOS
export async function getContactos() {
    try{
        const reponse = await apiClient.get('/user/contactos',{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return reponse.data;
    } catch (e) {
        throw e;
    }
}

/**
 * @param {Number} id 
 */
export async function getContactoId(id) {
    try{
        const response = await apiClient.get(`/user/contacto/${id}`,{
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    }catch(e){
        throw e;
    }
}

export async function getContactosFavoritos() {
    try{
        const response= await apiClient.get('/user/contactos/favoritos',{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

        return response.data;
    }catch(e){
        throw e;
    }
}

/**
 * @param {contacto} request 
 */
export async function postContacto(request) {
    try{
        const response= await apiClient.post('/user/contacto', request,{
            headers:{
                Authorization:`Bearer ${token}`
            }
        });

        return response.data;
    }catch(e){
        throw e;
    }
}

/**
 * @param {Number} id 
 */
export async function deleteContactoId(id) {
    try{
        const response = await apiClient.delete(`/user/contacto/${id}`,{
            headers: {
                Authorization:`Bearer ${token}`
            }
        });

        return response.status;
    }catch(e){
        throw e;
    }
}

/**
 * @param {Number} id
 * @param {Boolean} estado
 */

export async function patchContactoIsFavorito(id, estado) {
    try{
        const response = await apiClient.patch(`/user/contacto/${id}`,null, {
            params: {
                estado
            },
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    }catch(error){
        throw error;
    }
}
/**
 * @param {Number} id 
 * @param {contacto} request 
 */
export async function putContacto(id, request) {
    try {
        const response = await apiClient.put(`${API_URL}/user/contacto/${id}`, request, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}