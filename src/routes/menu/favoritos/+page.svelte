<script>
    import Barra from '$lib/components/barra.svelte';
    import Nav from '$lib/components/navbar.svelte';
    import { getContactosFavoritos } from '$lib/api';
    import { onMount } from 'svelte';
    import { generarAvatar } from '$lib/js/funciones';

    let cargado = false;
    /**
     * @type {any[] | null | undefined}
     */
    let contactos;
    async function obtenerContactos() {
        try {
            const response = await getContactosFavoritos();
            contactos=response;
        } catch (error) {
            console.log(error);
        }finally{
            cargado=true;
        }
    }

    onMount(obtenerContactos);
</script>

<Barra />

<div class="container" style="margin-top: 90px; margin-bottom: 60px;">
    <h1 class="display-5 text-center mb-3">Favoritos</h1>


    {#if !cargado}
        <div class="text-center" style="margin-top: 130px;">
            <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
                <span class="sr-only"></span>
            </div>
        </div>
    {:else if contactos == null || contactos.length == 0}
        <div class="text-center" style="margin-top: 150px;">
            <h1 class="display-5">No hay contactos favoritos</h1>
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

<Nav />