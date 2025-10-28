<script>
    import Nav from '$lib/components/navbar.svelte'
    
</script>


<div class="container" style="margin-top: 70px; margin-bottom: 60px;">
    <h1 class="display-5 text-center mb-3">Configuración</h1>

    <div class="col-12 mt-4 d-flex justify-content-center align-items-center">
        <button class="btn">
            <span><i class="bi bi-person" style="font-size: 70px;"></i></span>
            <p>Perfil</p>
        </button>
    </div>
    
    <div class="col-12 d-flex justify-content-center align-items-center mt-4">
        <button class="btn">
            <span>
                <img src="/imgs/logo.png" alt="Logo" style="width: 100px; height: auto;">
                <p>Acerca De ContacApp</p>
            </span>
        </button>
    </div>
</div>

<a 
    class="btn btn-link d-flex justify-content-center align-items-center" 
    style="bottom: 110px; position: fixed; right: 20px;"

    href="https://github.com/AlfreGood20/PWA-AGENDA-DE-CONTACTO">©copyright
</a>

<Nav />