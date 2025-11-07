<script>
    import Validacion from "$lib/components/validacion.svelte";


    let nombre = '';
    let apellidos = '';
    let telefono = '';
    let correo = '';
    let password = '';
    let mostrarPassword=false;

    /** 
     * @param {string} correo
     * @returns {boolean}
     */
    function validarCorreo(correo) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(correo);
    }

    function verPassword() {
        if(mostrarPassword){
            mostrarPassword=false
            return;
        }
        mostrarPassword=true;
    }

</script>

<div class="container" style="margin-bottom: 30px;">

    <h1 class="text-center mt-5 mb-4">Registrate</h1>

    <div class="row">
        
        <form novalidate>
            <div class="col-12">
                <label for="nombre" class="form-label">Nombre: </label>
                <input bind:value={nombre} class="form-control {nombre ? 'is-valid':'is-invalid'}"  placeholder="Juan Perez"  required>
                <Validacion valido={!!nombre} descripcion={!!nombre ? '' : 'El nombre es obligatorio.'} />
            </div>

            <div class="col-12 mt-4">
                <label for="apellidos" class="form-label">Apellidos: </label>
                <input bind:value={apellidos} class="form-control {apellidos ? 'is-valid':'is-invalid'}" placeholder="Gardoza Alvarez" required>
                <Validacion valido={!!apellidos} descripcion={!!apellidos ? '' : 'Los apellidos son obligatorios.'} />
            </div>

            <div class="col-12 mt-4">
                <label for="telefono" class="form-label">Teléfono: </label>
                <input bind:value={telefono} class="form-control {(String(telefono).length >= 10 && String(telefono).length <= 13)  ? 'is-valid':'is-invalid'}" placeholder="+993 277 88 99" required type="number">
                <Validacion valido={String(telefono).length >= 10 && String(telefono).length <= 13} descripcion={String(telefono).length >= 10 && String(telefono).length <= 13 ? '¡Teléfono válido!' : 'El teléfono debe tener entre 10 y 13 caracteres.'} />
            </div>

            <div class="col-12 mt-4">
                <label for="correo" class="form-label">Correo: </label>
                <input bind:value={correo} class="form-control {validarCorreo(correo) ? 'is-valid':'is-invalid'}" placeholder="username@gmail.com" type="email" required>
                <Validacion valido={validarCorreo(correo)} descripcion={validarCorreo(correo) ? '¡Correo válido!' : 'El correo es obligatorio y tener formato correcto.'} />
            </div>

            <div class="col-12 mt-4">
                <label for="password" class="form-label">Contraseña: </label>

                <div class="input-group">
                    <input bind:value={password} class="form-control {password.length >= 8 ? 'is-valid' : 'is-invalid'}" placeholder="JuanP el proo"  type={mostrarPassword ? 'text' : 'password'} required/>
                    <button type="button" class="btn btn-outline-dark" on:click={verPassword}  title={mostrarPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}><i class={"bi " + (mostrarPassword ? "bi-eye-slash" : "bi-eye")}></i></button>
                    <Validacion valido={password.length >= 8} descripcion={password.length >= 8 ? '' : 'La contraseña debe tener al menos 8 caracteres.'} />
                </div>
                
            </div>

            <div class="row mt-3 justify-content-center g-2">
                <div class="col-auto">
                    <button type="submit" class="btn btn-primary px-4">
                        <i class="bi bi-person-plus-fill" aria-hidden="true" style="margin-right:8px;"></i>
                        Registrarme
                    </button>
                </div>

                <div class="col-auto">
                    <button type="reset" class="btn btn-secondary px-4">
                        <i class="bi bi-eraser" aria-hidden="true" style="margin-right:8px;"></i>
                        Limpiar
                    </button>
                </div>

                <div class="col-auto">
                    <a type="button" class="btn btn-outline-primary px-4" href="/login">
                        <i class="bi bi-arrow-left" aria-hidden="true" style="margin-right:8px;"></i>
                        Regresar Login
                    </a>
                </div>
            </div>

        </form>
        
    </div>

</div>