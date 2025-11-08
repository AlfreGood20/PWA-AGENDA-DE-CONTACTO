<script>
    import Nav from '$lib/components/navbar.svelte';
    import Barra from '$lib/components/barra.svelte';
    import {getContactos} from '$lib/api';
    import {goto} from '$app/navigation';
    import {onMount} from 'svelte';
    import { generarAvatar } from '$lib/js/funciones';


    /**
     * Generate an avatar URL.
     * @param {string} nombre
     * @param {number} [size]
     * @param {string} [background]
     * @param {string} [color]
     * @returns {string}
     */
    
    
    let cargado = false;
    /**
     * @type {any[] | null | undefined}
     */
    let contactos;
    async function obtenerContactos() {
        try{
            const response = await getContactos();
            contactos = response;
        }catch(e){
            // @ts-ignore
            if(e.response.status == 401) goto('/login');
            else goto('/login');
        } finally{
            cargado = true;
        }
    }

    onMount(obtenerContactos);

</script>

<Barra />

<div class="container" style="margin-top: 75px; margin-bottom: 110px;">
    <h1 class="display-5 text-center mb-3">Contactos</h1>

    {#if !cargado}
        <div class="text-center" style="margin-top: 130px;">
            <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    {:else if contactos == null || contactos.length == 0}
        <div class="text-center" style="margin-top: 150px;">
            <h1 class="display-5">No hay contactos</h1>
        </div>
    {:else if contactos.length > 0}
        {#each contactos as c}
            <div class="card mt-2">
                <div class="card-body">
                    <a href={`/menu/contactos/usuario?id=${c.id}`} class="btn" style="font-size: 15px;">
                        <span><img  class="rounded-5" src={generarAvatar(c.nombre,65,c.color_avatar.replace('#',''))} alt="Avatar"></span>  {c.nombre} {c.apellidos}
                    </a>
                </div>
            </div>
        {/each}
    {/if}
    
</div>

<a 
    class="btn btn-primary d-flex justify-content-center align-items-center rounded-5" 
    style="bottom: 110px; position: fixed; width: 70px; height: 70px; right: 20px;"
    aria-label="Agregar contacto" title="Agregar contacto" href="/menu/contactos/nuevo">

    <i class="bi bi-person-plus-fill" style="font-size: 1.9rem;" aria-hidden="true"></i>
</a>

<Nav />