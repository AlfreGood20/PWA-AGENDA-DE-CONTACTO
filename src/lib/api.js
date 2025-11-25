import axios from 'axios';
import { Login } from './js/clases';
import { contacto } from './js/clases';
import { Usuario } from './js/clases';


const API_URL = import.meta.env.VITE_API_URL;

/**
 * @param {Login} request
 */
export async function postLogin(request) {

    try{
        const response = await axios.post(`${API_URL}/auth`, request, {
            withCredentials: true
        });

        return response.data;
    }catch(error){
        throw error;
    }
}


export async function getCerrarSession() {
    try{
        const reponse = await axios.get(`${API_URL}/deauthenticate`);
        return reponse;
    }catch(error){
        throw error;
    }
}


/**
 * @param {Usuario} request 
 */
export async function postUsuario(request) {
    try {
        const reponse = await axios.post(`${API_URL}/usuario`,request)
        return reponse;
    } catch (error) {
        throw error;
    }
}

export async function getPefil() {
    try{
        const response = await axios.get(`${API_URL}/perfil`,{
            withCredentials: true
        })

        return response.data;
    }catch(error){
        throw error;
    }
}

// CONTACTOS
export async function getContactos() {
    try{
        const reponse = await axios.get(`${API_URL}/contactos`,{
            withCredentials: true
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
        const response = await axios.get(`${API_URL}/contacto/${id}`,{
            withCredentials: true
        });
        return response.data;
    }catch(e){
        throw e;
    }
}

export async function getContactosFavoritos() {
    try{
        const response= await axios.get(`${API_URL}/contactos/favoritos`,{
            withCredentials: true
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
        const response= await axios.post(`${API_URL}/contacto`, request,{
            withCredentials: true
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
        const response = await axios.delete(`${API_URL}/contacto/${id}`,{
            withCredentials: true
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
        const response = await axios.patch(`${API_URL}/contacto/${id}?estado=${estado}`, null, {
            withCredentials: true
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
        const response = await axios.put(`${API_URL}/contacto/${id}`, request, {
            withCredentials: true
        });

        return response.data;
    } catch (error) {
        throw error;
    }
}