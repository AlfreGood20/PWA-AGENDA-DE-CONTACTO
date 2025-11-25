<script>
    import Nav from '$lib/components/navbar.svelte';
    import Alert from '$lib/components/alerta.svelte';
    import { generarAvatar } from '$lib/js/funciones';
    import { contacto } from '$lib/js/clases';
    import { postContacto } from '$lib/api';
    import Validacion from '$lib/components/validacion.svelte';

   
    let nombre='';
    let apellidos='';
    let telefono='';
    let correo='';
    let direccion='';
    let categoria='';
    let colorSeleccionado='';
    
    let alertaGuardar=false;
    function accionGuardarContacto() {
        registrarContacto();
        alertaGuardar=true;
        setTimeout(()=>{
            alertaGuardar=false;
        },3000);
    }

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
        
        <form on:submit={accionGuardarContacto}>

            <div class="col-12 mt-5">
                
                 <div class="d-flex justify-content-between">
                    <h1>Datos Contacto</h1>
                    <button class="btn btn-link p-0" aria-label="Guardar contacto" type="submit" title="Guardar contacto">
                        <i class="bi bi-save" style="font-size: 45px;"></i>
                    </button>
                 </div>
              
            </div>

            <Alert color="success" mensaje="Registrado con exito" visible={alertaGuardar}/>

            <div class="col-12 d-flex justify-content-center"> 
                <input type="color" bind:value={colorSeleccionado} class="form-control" style="display: none;" bind:this={colorInput}>
                <button type="button" class="btn p-0" aria-label="Seleccionar color" on:click={() => colorInput.click()} style="border: none; background: transparent;">
                    <img src={generarAvatar(nombre, 150, colorSeleccionado, "ffffff")} alt="avatar" style="border-radius: 50%; cursor: pointer;">
                </button>
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
                    <select bind:value={categoria} class="form-select" style="height: 60px;" required>
                        <option value="Familia">Familiar</option>
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

        </form>

        

    </div>

</div>

<Nav/>
