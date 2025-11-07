<script>
    import Nav from '$lib/components/navbar.svelte';
    import Alert from '$lib/components/alerta.svelte';
    import { generarAvatar } from '$lib/js/funciones';
    import { contacto } from '$lib/js/clases';
    import { postContacto } from '$lib/api';


    let alertaGuardar=false;
    let nombre='';
    let apellidos='';
    let telefono='';
    let correo='';
    let direccion='';
    let categoria='';
    let colorSeleccionado='';
    
    /**
     * @type {HTMLInputElement}
     */
    let colorInput;

    async function registrarContacto() {
        try{
            const reponse = await postContacto(new contacto(nombre,apellidos,telefono,correo,direccion,categoria,colorSeleccionado));
            alertaGuardar = true;
        }catch(e){
            console.log(e);
        }
    }


</script>

<div class="container" style="margin-bottom: 110px;">

    <div class="row">
        
        <div class="col-9 col-md-10 mt-4">
            <h1>Datos Contacto</h1>
        </div>

        <div class="col-3 col-md-2 mt-4">
            <button class="btn btn-link" aria-label="Guardar contacto" title="Guardar contacto" on:click={registrarContacto}>
                <span><i class="bi bi-save" style="font-size: 45px;"></i></span>
            </button>
        </div>

        <Alert color="success" mensaje="Registrado con exito" visible={alertaGuardar}/>

        <div class="col-12 d-flex justify-content-center"> 
            <input type="color" bind:value={colorSeleccionado} class="form-control" style="display: none;" bind:this={colorInput}>
            <span>
                <img src={generarAvatar(nombre, 150, colorSeleccionado, "ffffff")} style="border-radius: 50%; cursor: pointer;" on:click={() => colorInput.click()}>
            </span>
        </div>
        
        <div class="col-12 mt-4">
            <p>Nombre del contacto</p>
        </div>

        <div class="col-12">
            <div class="input-group">
                <span class="input-group-text">
                    <i class="bi bi-person-circle" style="font-size: 1.5rem;"></i>
                </span>
                <input bind:value={nombre} placeholder="Nombre" class="form-control" style="height: 60px;">
            </div>
        </div>
        
        <div class="col-12 mt-2">
            <input bind:value={apellidos} placeholder="apellidos" class="form-control" style="height: 60px;">
        </div>

        <div class="col-12 mt-3">
            <p>Contactos</p>
        </div>
        
        <div class="col-12">
            <div class="input-group">
                <span class="input-group-text">
                    <i class="bi bi-telephone" style="font-size: 1.5rem;"></i>
                </span>
                <input bind:value={telefono} placeholder="+52 99-..." type="number" class="form-control" style="height: 60px;">
            </div>
        </div>

        
        <div class="col-12 mt-3">
            <div class="input-group">
                <span class="input-group-text">
                    <i class="bi bi-envelope" style="font-size: 1.5rem;"></i>
                </span>
                <input bind:value={correo} type="email" placeholder="correo@..." class="form-control" style="height: 60px;">
            </div>
        </div>

        
        <div class="col-12 mt-3">
            <p>Dirección</p>
        </div>
        <div class="col-12">
            <input bind:value={direccion} placeholder="Calle..." class="form-control" style="height: 60px;">
        </div>


        <div class="col-12 mt-3">
            <p>Categoria</p>
        </div>
        <div class="col-12">
            <div class="input-group">
                <span class="input-group-text">
                    <i class="bi bi-grid" style="font-size: 1.5rem;"></i>
                </span>
                <select bind:value={categoria} class="form-select" style="height: 60px;">
                    <option value="Familiar">Familia</option>
                    <option value="Ecuela">Escuela</option>
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

</div>

<Nav/>
