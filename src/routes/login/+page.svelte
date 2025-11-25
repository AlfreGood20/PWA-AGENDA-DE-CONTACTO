<script>
    import { postLogin } from '$lib/api';
    import { Login } from '$lib/js/clases';
    import {goto} from '$app/navigation';
    
    let correo = '';
    let contrasena = '';
    let mostrarNoAutorizado=false;
    
    async function logiarse() {
        const usuario = new Login(correo,contrasena);

        try{
            const response = await postLogin(usuario);
            await goto('/menu/contactos');
        }catch(e){
            // @ts-ignore
            if(e.status == 401){
                mostrarNoAutorizado=true;
            }
        }
    }
    
</script>


<div style="width:100%; min-height:100vh; background-image: url('/imgs/fondo login 2.jpg'); background-size: cover; background-position: center; background-repeat: no-repeat; display:block;">
    <div class="container">
        
        <div class="row d-flex justify-content-center align-items-center" style="min-height: 90vh;">

            <div class="col-2 col-md-2 col-lg-auto">
                <a href="https://github.com/AlfreGood20/PWA-AGENDA-DE-CONTACTO"><span><img src="/imgs/logo.png" alt="logo" style="height: 60px;"></span></a>
            </div>

            <div class="col-10 col-md-10 col-lg-11">
                <h3 style="color: white;">ContactApp <span><p style="font-size: 10px;">versión 1.0.0</p></span></h3>
            </div>

            <div class="card col-12 col-md-6 col-lg-4 shadow-lg" >

                <div class="card-body">

                    <h3 class="card-title text-center mb-4 mt-4">Iniciar Sesión</h3>

                    <form  on:submit={logiarse}>
                        
                        <div class="mb-3">
                            <label for="email" class="form-label">Correo electrónico</label>
                            <input bind:value={correo} type="email" id="email" class="form-control" placeholder="Ingresa tu correo" required>
                        </div>

                    
                        <div class="mb-3">
                            <label for="password" class="form-label">Contraseña</label>
                            <input bind:value={contrasena} type="password" id="password" class="form-control" placeholder="Ingresa tu contraseña" required>
                            {#if !(contrasena.length >=8) }
                                <label class="text-center" for="contrasena menor a 8" style="font-size: 13px; color: red;">La contraseña debe ser mayor a 8 caracteres</label>
                            {/if}

                            {#if mostrarNoAutorizado}
                                <label class="text-center" for="No Autorizado" style="font-size: 13px; color: red;">🚫 Correo y/o contraseña incorrecta vuelve a intentarlo</label>
                            {/if}
                        </div>

                     
                        <div class="d-grid">
                            <button type="submit" class="btn btn-primary">Entrar</button>
                        </div>
                    </form>

                    
                    <div class= "d-flex justify-content-center mt-3">
                        <p>¿No tienes cuenta?</p>
                    </div>

                    <div class="d-flex justify-content-center ">
                        <a href="/registro">Crear Cuenta</a>
                    </div>

                </div>

            </div>
        </div>

    </div>
</div>