<style>
    .placeholder-item {
        position: relative;
        overflow: hidden;
    }
    .placeholder-item::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background: #f3f3f3;
    }
    .placeholder-item::after {
        content: '';
        display: block;
        position: absolute;
        left: -150px;
        top: 0;
        height: 100%;
        width: 150px;
        background: linear-gradient(to right, transparent 0%, #E8E8E8 50%, transparent 100%);
        animation: load 1s infinite cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    @keyframes load {
        from {
            left: -150px;
        }
        to   {
            left: 100%;
        }
    }
</style>
<script lang="typescript">
    export let condition = false;
</script>
<div class="{condition ? "" : "placeholder-item"}">
    <slot></slot>
</div>