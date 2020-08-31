<style>
    ul {
        padding: 0;
        list-style: none;

        display: grid;
    }
    div {
        padding: 5px;
        margin: 2px;
        text-align: center;
        border-radius: 5px;
    }
</style>
<script>
    import parties from "./parties.js"
    export let localInfo
</script>
<ul>
    {#each localInfo.members as { name, party }, i}
        <li style="grid-column: {i % 10 + 1};">
            <div style="
                background: {parties[party].color.primary};
                color: {parties[party].color.text};
            ">
                {name}
            </div>
        </li>
    {/each}
</ul>