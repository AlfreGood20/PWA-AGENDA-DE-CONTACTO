<script>
    import Nav from '$lib/components/navbar.svelte';
    import Alert from '$lib/components/alerta.svelte';

    /**
     * Generate an avatar URL.
     * @param {string} nombre
     * @param {number} [size]
     * @param {string} [background]
     * @param {string} [color]
     * @returns {string}
     */

    function generarAvatar(nombre, size = 150, background = "99A6F7", color = "0D0D0D") {
        const url = "https://ui-avatars.com/api/";
        const parametros = new URLSearchParams({
            name: nombre,
            size: size.toString(),
            background,
            color
        });

        return `${url}?${parametros.toString()}`;
    }


    let alertaGuardar=false;
    let nombre="";
    let colorSeleccionado="#99A6F7";
    let colorInput;


</script>

<div class="container" style="margin-bottom: 110px;">

    <div class="row">
        
        <div class="col-6 col-md-6 mt-4">
            <h1>Datos Contacto</h1>
        </div>

        <div class="col-6 col-md-6 mt-4">
            <button class="btn btn-link" style="margin-left: 130px;" aria-label="Guardar contacto" title="Guardar contacto" on:click={()=> alertaGuardar=true}>
                <span><i class="bi bi-save" style="font-size: 35px;"></i></span>
            </button>
        </div>

        <Alert
            color="success"
            mensaje="Registrado con exito"
            visible={alertaGuardar}
        />

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
            <i class="bi bi-person-circle" style="font-size: 2rem; margin-left: 30px; mar"></i>
            <input bind:value={nombre} placeholder="Nombre" style="margin-left: 20px; height: 60px; width: 70%;">
        </div>

        <div class="col-12 mt-3">
            <input placeholder="apellidos" style="margin-left: 85px; height: 60px; width: 70%;">
        </div>

        <div class="col-12 mt-2">
            <p>Contactos</p>
        </div>

        <div class="col-12">
            <i class="bi bi-telephone" style="font-size: 2rem; margin-left: 30px; mar"></i>
            <input placeholder="+52 99-..."  style="margin-left: 20px; height: 60px; width: 70%;">
        </div>

        <div class="col-12 mt-3">
            <i class="bi bi-envelope" style="font-size: 2rem; margin-left: 30px; mar"></i>
            <input placeholder="correo@..."  style="margin-left: 20px; height: 60px; width: 70%;">
        </div>

        <div class="col-12 mt-2">
            <p>Categoria</p>
        </div>

        <div class="col-12">
            <i class="bi bi-grid" style="font-size: 2rem; margin-left: 30px; mar"></i>
            <select name="opciones" style="margin-left: 20px; height: 60px; width: 70%;">
                <option value="Familiar">Familiar</option>
                <option value="Amigo">Amigo</option>
                <option value="Negocio">Negocio</option>
                <option value="Novi@">Novia@</option>
                <option value="Amante">Amante</option>
                <option value="Ex">Ex novi@</option>
            </select>
        </div>

    </div>

</div>

<Nav/>
