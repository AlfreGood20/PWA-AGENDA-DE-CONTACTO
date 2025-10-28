<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import Navbar from '$lib/components/navbar.svelte';
    import Modal from '$lib/components/modal.svelte'
    import Alert from '$lib/components/alerta.svelte'
    
    /*let id=null;

    onMount(() => {
        const parametro = new URLSearchParams(window.location.search);
        id = parametro.get('id'); 
    });*/

    let contacto = 
        {id: 1, 
        nombre: "José Alfredo", 
        apellidos: "López De La Cruz", 
        direccion: "Espejo 2 Telpalcatepec 111", 
        Telefono:"9932460918", 
        correo:"jose@123",
        avatar:"https://ui-avatars.com/api/?name=Jose+Alfredo", 
        categoria:"Familiar"
    };

    let visibleModalEliminar= false;

    function abrirModalEliminar(){
        visibleModalEliminar=true;
    }

    function cerrarModalEliminar() {
        visibleModalEliminar = false;
    }

    function eliminarContacto() {
        alert('Simulacion de eliminacion')
        cerrarModalEliminar();

        goto('/menu/contactos');
    }


    let mostrarAlertaFavorito = false;

    function mostrarMensajeFavorito() {
        mostrarAlertaFavorito = true;

        setTimeout(()=> {
            mostrarAlertaFavorito=false;
        }, 4000);
    }

    let mostrarAlertaQuitarFavorito=false;

    function mostrarMensajeQuitarFavorito() {
        mostrarAlertaQuitarFavorito = true;

        setTimeout(()=> {
            mostrarAlertaQuitarFavorito=false;
        }, 4000);
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
          
            <button class="btn btn-link" style="font-size: 2rem;" aria-label="Editar contacto" data-bs-toggle="modal" data-bs-target="#Editar">
                <i class="bi bi-brush-fill" aria-hidden="true"></i>
            </button>
        </div>

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
            <img src="https://ui-avatars.com/api/?name=Jose+Alfredo&size=256" alt="Avatar" style="width: 200px; height: 200px; border-radius: 50%;">
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
                <span>{contacto.Telefono}</span>
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

        <div class="col-md-12 col-12 mt-3 d-flex justify-content-center">
            <h1>{contacto.categoria}</h1>
        </div>
    </div>
</div>

<div class="modal fade" id="Editar" role="dialog" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Editar Contacto</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>

      <div class="modal-body">
        <form>
            
            <div class="row">

                <div class="col-12">
                    <p class="text-center">Nombre:</p>
                </div>

                <div class="col-12 d-flex justify-content-center align-items-center">
                    <input bind:value={contacto.nombre}>
                </div>

                <div class="col-12 mt-3">
                <p class="text-center">Apellidos:</p>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={contacto.apellidos} class="form-control" placeholder="Apellidos" style="width: 70%;" />
                </div>

                <!-- Teléfono -->
                <div class="col-12 mt-3">
                <p class="text-center">Teléfono:</p>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={contacto.Telefono} class="form-control" placeholder="Teléfono" style="width: 70%;" />
                </div>

                <!-- Correo -->
                <div class="col-12 mt-3">
                <p class="text-center">Correo:</p>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={contacto.correo} class="form-control" placeholder="Correo" style="width: 70%;" />
                </div>

                <!-- Dirección -->
                <div class="col-12 mt-3">
                <p class="text-center">Dirección:</p>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                <input bind:value={contacto.direccion} class="form-control" placeholder="Dirección" style="width: 70%;" />
                </div>

                <!-- Categoría -->
                <div class="col-12 mt-3">
                <p class="text-center">Categoría:</p>
                </div>
                <div class="col-12 d-flex justify-content-center align-items-center">
                <i class="bi bi-grid" style="font-size: 2rem; margin-right: 10px;"></i>
                <select bind:value={contacto.categoria} class="form-select" style="width: 70%; height: 60px;">
                    <option value="Familiar">Familiar</option>
                    <option value="Amigo">Amigo</option>
                    <option value="Negocio">Negocio</option>
                    <option value="Novi@">Novi@</option>
                    <option value="Amante">Amante</option>
                    <option value="Ex">Ex novi@</option>
                </select>
                </div>
            </div>
        </form>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" class="btn btn-success">Actualizar</button>
      </div>
    </div>
  </div>
</div>

<Modal
    titulo="Eliminar"
    mensaje="¿Seguro que quieres eliminar este contacto?"
    cerrar={()=> cerrarModalEliminar()}
    visible={visibleModalEliminar}
    color="danger"
    nombreBotonAccion="Eliminar"
    accion={() => eliminarContacto()}
/>

<Navbar/>