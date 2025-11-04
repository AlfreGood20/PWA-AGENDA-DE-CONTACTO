import axios from 'axios';
import { Login } from './js/clases';
import { contacto } from './js/clases';


const API_URL = import.meta.env.VITE_API_URL;

/**
 * @param {Login} request
 */
export async function postLogin(request) {

    try{
        const reponse = await axios.post(`${API_URL}/auth`,request, {
            withCredentials: true
        });

        return reponse.data;
    }catch(error){
        throw error;
    }
}


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
        const response = await axios.get(`${API_URL}/contacto/${id}`);
        return response.data;
    }catch(e){
        throw e;
    }
}

export async function getContactoFavoritos() {
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

        return response;
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

        return response;
    }catch(e){
        throw e;
    }
}