<script>
  export let status;
  export let error;
  import { goto } from '$app/navigation';

</script>

<div class="container text-center" style="margin-top: 100px;">
  <div class="row">

    <div class="col-12 py-5 mt-md-1 mt-5">
      <h1 class="display-4">{status ?? '404'}</h1>

      <p class="lead">{error?.message ?? (status === 404 ? 'Página no encontrada' : 'Ha ocurrido un error')}</p>

      {#if status === 404 || status == null}
        <p>La página que buscas no existe o fue movida.</p>
      {:else if status >= 500}
        <p>Estamos experimentando problemas en el servidor. Intenta de nuevo en unos minutos.</p>
      {:else}
        <p>Ha ocurrido un error. Intenta refrescar la página o vuelve más tarde.</p>
      {/if}

      <div class="mt-4">
        <button class="btn btn-primary me-2" on:click={() => goto('/login')}>Ir a login</button>
        <button class="btn btn-outline-secondary" on:click={() => goto('/menu/contactos')}>Ir a contactos</button>
      </div>
    </div>
  </div>
</div>