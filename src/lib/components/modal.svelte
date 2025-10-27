<script>
    export let titulo;
    export let mensaje;
    export let visible=false;
    export let nombreBotonAccion;
    export let color;

    export let accion;
    export let cerrar;
</script>

{#if visible}
<div class="modal fade show" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" style="display: block;" aria-modal="true" role="dialog">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalCenterTitle">{titulo}</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" on:click={() => cerrar()}></button>
      </div>
      <div class="modal-body">
        <p>{mensaje}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" on:click={() => cerrar()}>Close</button>
        <button type="button" class={`btn btn-${color}`} on:click={()=>accion()}>{nombreBotonAccion}</button>
      </div>
    </div>
  </div>
</div>
{/if}