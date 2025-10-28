<script>
    import Nav from '$lib/components/navbar.svelte'
    import Barra from '$lib/components/barra.svelte'

    /**
     * Generate an avatar URL.
     * @param {string} nombre
     * @param {number} [size]
     * @param {string} [background]
     * @param {string} [color]
     * @returns {string}
     */

    function generarAvatar(nombre, size = 65, background = "001bff", color = "ffffff") {
        const url = "https://ui-avatars.com/api/";
        const parametros = new URLSearchParams({
            name: nombre,
            size: size.toString(),
            background,
            color
        });

        return `${url}?${parametros.toString()}`;
    }

    let contactos = [
        {nombre: "José Alfredo", apellidos: "Lopez De La Cruz", id:1 },
        {nombre: "Paola Cristel", apellidos: "Lopez De La Cruz", id:3},
        {nombre: "Edward", apellidos: "Franciscos", id:5},
        {nombre: "David", apellidos: "Alucin", id:10},
        {nombre: "José Alfredo", apellidos: "Lopez De La Cruz", id:1 },
        {nombre: "Paola Cristel", apellidos: "Lopez De La Cruz", id:3},
        {nombre: "Edward", apellidos: "Franciscos", id:5},
        {nombre: "David", apellidos: "Alucin", id:10}
    ];

</script>

<Barra />

<div class="container" style="margin-top: 75px; margin-bottom: 100px;">
    <h1 class="display-5 text-center mb-3">Contactos</h1>

    {#each contactos as c}
        <div class="card mt-2">
            <div class="card-body">
                <a href={`/menu/contactos/usuario?id=${c.id}`} class="btn" style="font-size: 15px;">
                    <span><img  class="rounded-5" src={generarAvatar(c.nombre)} alt="Avatar"></span>  {c.nombre} {c.apellidos}
                </a>
            </div>
        </div>
    {/each}
</div>

<a 
    class="btn btn-primary d-flex justify-content-center align-items-center rounded-5" 
    style="bottom: 110px; position: fixed; width: 70px; height: 70px; right: 20px;"
    aria-label="Agregar contacto" title="Agregar contacto" href="/menu/contactos/nuevo">

    <i class="bi bi-person-plus-fill" style="font-size: 1.9rem;" aria-hidden="true"></i>
</a>

<Nav />