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
           
            <button class="btn btn-link " id="liveAlertBtn" style="font-size: 2rem;" aria-label="Agregar a favoritos"
            on:click={()=> mostrarMensajeFavorito()}>
                <i class="bi bi-bookmark-star-fill" aria-hidden="true"></i>
            </button>
            
            <button class="btn btn-link" style="font-size: 2rem;" aria-label="Quitar de favoritos"
            on:click={()=> mostrarMensajeQuitarFavorito()}>
                <i class="bi bi-bookmark-x-fill" aria-hidden="true"></i>
            </button>
          
            <button class="btn btn-link" style="font-size: 2rem;" aria-label="Editar contacto">
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