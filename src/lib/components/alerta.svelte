<script>
    export let color;
    export let mensaje;
    export let visible=false;
</script>

{#if visible}
    <div class={`alert alert-${color}`} role="alert">
        {mensaje}
    </div>
{/if}
