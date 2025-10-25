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

    function generarAvatar(nombre, size = 50, background = "001bff", color = "ffffff") {
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
        {nombre: "José Alfredo", apellidos: "Lopez De La Cruz" },
        {nombre: "Paola Cristel", apellidos: "Lopez De La Cruz" },
        {nombre: "Edward", apellidos: "Franciscos"},
        {nombre: "David", apellidos: "Alucin"}
    ];

</script>

<Barra />

<div class="container" style="margin-top: 90px; margin-bottom: 100px;">
    <h1 class="display-5 text-center mb-3">Contactos</h1>

    {#each contactos as c}
        <div class="card mt-2">
            <div class="card-body">
                <a href="#" class="btn">
                    <span><img src={generarAvatar(c.nombre)} alt="Avatar"></span>   
                    {c.nombre} {c.apellidos}
                </a>
            </div>
        </div>
    {/each}


</div>

<Nav />