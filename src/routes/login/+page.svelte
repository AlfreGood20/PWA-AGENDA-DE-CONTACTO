<script>
    import { postLogin } from '$lib/api';
    import { Login } from '$lib/js/clases';
    import {goto} from '$app/navigation';

    let correo = '';
    let contrasena = '';
    
    async function logiarse() {
        const usuario = new Login(correo,contrasena);

        try{
            const response = await postLogin(usuario);
            await goto('/menu/contactos');
        }catch(e){
            console.log(e);
        }
    }
    
</script>

<div class="container">

    <!-- Card para el login -->
    <div class="row d-flex justify-content-center align-items-center" style="height: 100vh;">

        <div class="card col-12 col-md-6 col-lg-4 shadow-lg">

            <div class="card-body">

                <h3 class="card-title text-center mb-5 mt-4">Iniciar Sesión</h3>

                <form on:submit={logiarse}>
                    <!-- Campo de correo -->
                    <div class="mb-3">
                        <label for="email" class="form-label">Correo electrónico</label>
                        <input bind:value={correo} type="email" id="email" class="form-control" placeholder="Ingresa tu correo" required>
                    </div>

                    <!-- Campo de contraseña -->
                    <div class="mb-3">
                        <label for="password" class="form-label">Contraseña</label>
                        <input bind:value={contrasena} type="password" id="password" class="form-control" placeholder="Ingresa tu contraseña" required>
                    </div>

                    <!-- Botón de inicio de sesión -->
                    <div class="d-grid">
                        <button type="submit" class="btn btn-primary">Entrar</button>
                    </div>
                </form>

                
                <div class= "d-flex justify-content-center mt-3">
                    <p class="label">¿No tienes cuenta?</p>
                </div>

                <div class="d-flex justify-content-center ">
                    <a href="#">Crear Cuenta</a>
                </div>

            </div>

        </div>
    </div>



</div>