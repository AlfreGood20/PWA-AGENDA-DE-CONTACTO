<script>
    import Nav from '$lib/components/navbar.svelte';
    import { getCerrarSession } from '$lib/api';
    import { goto } from '$app/navigation';
    import { generarAvatar } from '$lib/js/funciones';
    import { getPefil } from '$lib/api';
    import { onMount } from 'svelte';

    let modalAcerca=false;
    let modalPerfil=false;
    function openOrCloseModalAcerca() {
        if(modalAcerca){
            modalAcerca=false;
            return;
        }
        modalAcerca=true;
    }
    function openOrCloseModalPerfil() {
        if(modalPerfil){
            modalPerfil=false;
            return;
        }
        modalPerfil=true;
    }

    /**
     * @type any || null
     */
    let perfil;
    async function obtenerPerfil() {
        try {
            const response=await getPefil();
            perfil=response;
        } catch (error) {
            console.log(error);
        }
    }

    onMount(obtenerPerfil);

    async function cerrarSession() {
        try{
            const response= await getCerrarSession();
            goto('/login');
        }catch(error){
            console.log(error);
        }
    }



</script>

<div class="container" style="margin-bottom: 90px;">
    <h1 class="display-5 text-center mt-5 mt-md-0 ">Configuración</h1>

    <div class="row">
        
        <div class="col-12 d-flex justify-content-center align-items-center">
            <button class="btn" on:click={openOrCloseModalPerfil}>
                <span><i class="bi bi-person" style="font-size: 70px;"></i></span>
                <p>Perfil</p>
            </button>
        </div>

        {#if modalPerfil}
            <div class="modal fade show" id="perfilModal" tabindex="-1" role="dialog" aria-labelledby="perfilModalTitle" aria-hidden="false" style="display: block;" aria-modal="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="perfilModalTitle">Perfil 👤👇</h5>
                            <button type="button" class="btn-close" aria-label="Cerrar" on:click={openOrCloseModalPerfil}></button>
                        </div>
                        <div class="modal-body">
                            
                            <div class="d-flex justify-content-center align-items-center">
                                <img style="border-radius: 50%;" src={generarAvatar(perfil.nombre,120,"#6291FC","fffff")}>
                            </div>

                            <div class="text-center mt-3">
                                <p>{perfil.nombre} {perfil.apellidos}</p>
                                
                                <p>{perfil.correo} {perfil.telefono}</p>

                                <p>Fecha de registro: {perfil.fecha_registro}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        {/if}
        
                    
        <div class="col-12 d-flex justify-content-center align-items-center">
            <button class="btn" on:click={openOrCloseModalAcerca}>
                <span>
                    <img src="/imgs/logo.png" alt="Logo" style="width: 100px; height: auto;">
                    <p>Acerca De ContactApp</p>
                </span>
            </button>
        </div>

        {#if modalAcerca}
            <div class="modal fade show" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style="display: block;" aria-modal="true" role="dialog">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalCenterTitle">Acerca De ContactApp</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" on:click={openOrCloseModalAcerca}></button>
                        </div>
                        <div class="modal-body">
                            <h4 class="text-center">Bienvenido a contactAPP version 1.0.0 👋</h4>

                            <p>Este proyecto fue realizado por un estudiante de ingenieria en sistemas 3 semestre, lo cual sirvio aprobar una unidad de la materia topicos avanzados de programación.</p>
                            <p>El proyecto consiste en un CRUD basicos <mark>CREAR, LEER, ACTUALIZAR Y ELIMINAR</mark></p>

                            <p>Tecnologias Utilizadas: </p>

                            <div class="d-flex justify-content-center align-items-center">
                                <img src="/imgs/logo spring boot.png" alt="logo spring boot" style="width: auto; height: 30px;">
                            </div>

                            <div class="d-flex justify-content-center align-items-center">
                                <img src="/imgs/logo sveltekit.png" alt="logo spring boot" style="width: auto; height: 30px;">
                            </div>

                            <div class="d-flex justify-content-center align-items-center">
                                <img src="/imgs/logo bootstrap 2.png" alt="logo spring boot" style="width: auto; height: 50px;">
                            </div>

                            <div class="d-flex justify-content-center align-items-center">
                                <img src="/imgs/logo mysql.png" alt="logo spring boot" style="width: auto; height: 40px;">
                            </div>

                            <a href="https://github.com/AlfreGood20/API-AGENDA-CONTACTOS">Ir a resitorio api rest spring boot</a>
                        </div>
                    </div>
                </div>
            </div>
        {/if}
        

        <div class="col-12 d-flex justify-content-center align-items-center">
            <button class="btn" on:click={cerrarSession}>
                <span><i class="bi bi-box-arrow-right" style="font-size: 70px; color: red;"></i></span>
                <p>Cerrar Sesión</p>
            </button>
        </div>
    </div>
</div>

<a 
    class="btn btn-link d-flex justify-content-center align-items-center" 
    style="bottom: 90px; position: fixed; right: 20px;"

    href="https://github.com/AlfreGood20/PWA-AGENDA-DE-CONTACTO">©copyright
</a>

<Nav />