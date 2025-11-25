<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Navbar from '$lib/components/navbar.svelte';
    import Modal from '$lib/components/modal.svelte';
    import Alert from '$lib/components/alerta.svelte';
    import { getContactoId } from '$lib/api';
    import { generarAvatar } from '$lib/js/funciones';
    import { deleteContactoId } from '$lib/api';
    import { patchContactoIsFavorito } from '$lib/api';
    import { putContacto } from '$lib/api';
    
     let cargando=true;

     let visibleModalEliminar=false;
     function abrirModalEliminar(){
        if(visibleModalEliminar){
            visibleModalEliminar=false;
            return;
        }
        visibleModalEliminar=true;
     }

    let mostrarAlertaFavorito = false;
    function mostrarMensajeFavorito() {
        cambiarEstadoContacto(true);
        mostrarAlertaFavorito = true;
        setTimeout(()=> {
            mostrarAlertaFavorito=false;
        }, 4000);
    }

    let mostrarAlertaQuitarFavorito=false;
    function mostrarMensajeQuitarFavorito() {
        cambiarEstadoContacto(false);
        mostrarAlertaQuitarFavorito = true;
        setTimeout(()=> {
            mostrarAlertaQuitarFavorito=false;
        }, 4000);
    }

    let visibleModalEditar=false;
    /**
     * @type any
     */
    let editableContacto = null;
    function mostrarModalActualizar() {
        if (visibleModalEditar) {
            visibleModalEditar = false;
            editableContacto = null;
            return;
        }

        editableContacto = { ...contacto };
        visibleModalEditar = true;
    }


     /**
     * @type {any | null}
     */
    let id;
    onMount(async () => {
        const parametro = new URLSearchParams(window.location.search);
        id = parametro.get('id');
        await obtenerContacto();
    });
 
    /**
     * @type {any | null}
     */
    let contacto = {nombre: '', apellidos: '', telefono: '', correo: '', direccion: '', categoria: '', color_avatar: '#000000'};


     async function obtenerContacto() {
         try{
             const response = await getContactoId(id);
             contacto=response;
         }catch(e){
             // @ts-ignore
             if(e.response.status == 401) goto('/login');
         }finally{
             cargando=false;
         }
     }

     async function eliminarContacto() {
        try {
            const response = await deleteContactoId(id);
            
            if(response == 204) goto('/menu/contactos');
        } catch (error) {
            console.log(error);
        }
     }

     /**
      * 
      * @param {boolean} estado
      */
     async function cambiarEstadoContacto(estado) {
        try {
            const response = await patchContactoIsFavorito(id,estado);
        } catch (error) {
            console.log(error);
        }
     }

     async function actualizarContacto() {
        try {
            const response = await putContacto(id, editableContacto);

            contacto = response ?? { ...editableContacto };
           
            visibleModalEditar = false;
            editableContacto = null;
        } catch (error) {
            console.log(error);
        }
     }

</script>

<div class="container" style="margin-bottom: 100px;">

    <div class="row mb-5 mt-3">

        <div class="col-12 d-flex justify-content-end align-items-center mb-2">
            
            <button class="btn btn-link"  style="font-size: 2rem;" aria-label="Eliminar contacto"
            on:click={()=> abrirModalEliminar()}>
                <i class="bi bi-backspace" aria-hidden="true"></i>
            </button>
           
            <button class="btn btn-link " style="font-size: 2rem;" aria-label="Agregar a favoritos"
            on:click={()=> mostrarMensajeFavorito()}>
                <i class="bi bi-bookmark-star-fill" aria-hidden="true"></i>
            </button>
            
            <button class="btn btn-link" style="font-size: 2rem;" aria-label="Quitar de favoritos"
            on:click={()=> mostrarMensajeQuitarFavorito()}>
                <i class="bi bi-bookmark-x-fill" aria-hidden="true"></i>
            </button>
          
            <button class="btn btn-link" style="font-size: 2rem;" aria-label="Editar contacto" on:click={mostrarModalActualizar}>
                <i class="bi bi-brush-fill" aria-hidden="true"></i>
            </button>
        </div>


        {#if cargando}
            <div class="text-center" style="margin-top: 150px;">
                <div class="spinner-border" style="width: 5rem; height: 5rem;" role="status">
                    <span class="sr-only"></span>
                </div>
            </div>
        {:else}

            <Alert 
            color="success"
            mensaje= {`Has agregado a ${contacto.nombre} ${contacto.apellidos} a favoritos`}
            visible= {mostrarAlertaFavorito}
            />

            <Alert 
                color="dark"
                mensaje= {`Has quitado a ${contacto.nombre} ${contacto.apellidos} de favoritos`}
                visible= {mostrarAlertaQuitarFavorito}
            />

            <div class="col-12 col-md-12 d-flex justify-content-center">
                <img src={`${generarAvatar(contacto.nombre,256,contacto.color_avatar.replace('#',''))}`} alt="Avatar" style="width: 200px; height: 200px; border-radius: 50%;">
            </div>
        
            <div class="col-md-6 col-12 mt-5">
                <p style="font-size: 23px;">Nombre: 
                <span>{contacto.nombre}</span> 
                </p>
            </div>
            
            <div class="col-md-6 col-12 mt-3">
                <p style="font-size: 23px;">Apellidos: 
                    <span>{contacto.apellidos}</span>
                </p>
            </div>

            <div class="col-md-6 col-12 mt-3">
                <p style="font-size: 23px;">Telefono: 
                    <span>{contacto.telefono}</span>
                </p>
            </div>

            <div class="col-md-6 col-12 mt-3">
                <p style="font-size: 23px;">Correo: 
                    <span>{contacto.correo}</span>
                </p>
            </div>

            <div class="col-md-6 col-12 mt-3">
                <p style="font-size: 23px;">Dirección: 
                    <span>{contacto.direccion}</span>
                </p>
            </div>

            <div class="col-md-12 col-12  d-flex justify-content-center">
                <h1>{contacto.categoria}</h1>
            </div>
        {/if}
    </div>
</div>


{#if visibleModalEditar}

<div class="modal fade show" style="display: block;" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Contacto</h1>
        <button type="button" class="btn-close" aria-label="Close" on:click={() => { visibleModalEditar = false; editableContacto = null; }}></button>
      </div>

      <form on:submit|preventDefault={actualizarContacto}>

      <div class="modal-body">

        <div class="row">

            <div class="col-12">
                <p class="text-center">Nombre:</p>
            </div>

            <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={editableContacto.nombre} class="form-control" placeholder="Nombre" style="width: 70%;">
            </div>

            <div class="col-12 mt-3">
                <p class="text-center">Apellidos:</p>
            </div>

            <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={editableContacto.apellidos} class="form-control" placeholder="Apellidos" style="width: 70%;" />
            </div>

                <!-- Teléfono -->
            <div class="col-12 mt-3">
                <p class="text-center">Teléfono:</p>
            </div>

            <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={editableContacto.telefono} class="form-control" placeholder="Teléfono" style="width: 70%;" />
            </div>

                <!-- Correo -->
            <div class="col-12 mt-3">
                <p class="text-center">Correo:</p>
            </div>

            <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={editableContacto.correo} type="email" class="form-control" placeholder="Correo" style="width: 70%;" required/>
            </div>

                <!-- Dirección -->
            <div class="col-12 mt-3">
                <p class="text-center">Dirección:</p>
            </div>

            <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={editableContacto.direccion} class="form-control" placeholder="Dirección" style="width: 70%;" />
            </div>

                <!-- Categoría -->
            <div class="col-12 mt-3">
                <p class="text-center">Categoría:</p>
            </div>
            <div class="col-12 d-flex justify-content-center align-items-center">
                <i class="bi bi-grid" style="font-size: 2rem; margin-right: 10px;"></i>
                <select bind:value={editableContacto.categoria} class="form-select" style="width: 70%; height: 60px;" required>
                    <option value="Familia">Familia</option>
                    <option value="Escuela">Escuela</option>
                    <option value="Amigo">Amigo</option>
                    <option value="Negocio">Negocio</option>
                    <option value="Novia">Novia</option>
                    <option value="Novio">Novio</option>
                    <option value="Ex">Ex</option>
                    <option value="Amante">Amante</option>
                </select>
            </div>
        </div>
      </div>

        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" on:click={() => { visibleModalEditar = false; editableContacto = null; }}>Cerrar</button>
            <button type="submit" class="btn btn-success">Actualizar</button>
        </div>
      </form>
    </div>
  </div>
</div>
    
{/if}


<Modal
    titulo="Eliminar"
    mensaje="¿Seguro que quieres eliminar este contacto?"
    cerrar={()=> abrirModalEliminar()}
    visible={visibleModalEliminar}
    color="danger"
    nombreBotonAccion="Eliminar"
    accion={eliminarContacto}
/>

<Navbar/>