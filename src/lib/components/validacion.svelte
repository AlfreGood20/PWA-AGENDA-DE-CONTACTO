<script>
    export let valido=false;
    export let descripcion='';
</script>

{#if valido}
    <div class="valid-feedback">{descripcion}</div>
{:else}
    <div class="invalid-feedback">{descripcion}</div>
{/if}