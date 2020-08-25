<style>
    @font-face {
        font-family: "62570";
        src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.3/62570체.woff") format("woff");
        font-weight: normal;
        font-style: normal;
    }
    main {
        font-family: sans-serif;
        margin: 0 auto;
        max-width: 1400px;
        min-height: 100vh;
        padding: 10px;
        color: white;
    }
    header {
        font-size: 1em;
        line-height: 1em;
    }
    section {
        padding: 50px;
        background-color: white;
        color: black;
        border-radius: 30px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 16%);
        margin: 50px;

        display: grid;
        grid-template-columns: 30% 70%;
    }
    local {
        grid-column: 1;
    }
    chart {
        grid-column: 2;
        font-family: "62570";
    }
    .name {
        font-family: "62570";
        font-size: 3em;
        margin: 0;
    }
</style>

<script>
    import { onMount } from "svelte"
    import Load from "./Load.svelte"
    import Chart from "./Chart.svelte"
    export let local, localInfo
    
    const params = (new URL(location)).searchParams
    local = params.get("local")

    onMount(async () => {
        localInfo = await fetch(`/api/local/${local}`).then(x => x.json())
    })
</script>

<main>
    <header>
        <h1>한눈에</h1>
    </header>
    <section>
        <local>
            <img src="https://raw.githubusercontent.com/gnlow/jijache/master/logo/{local}.png" alt="" />
            <Load condition={localInfo}>
                <h1 class="name">
                    {#if localInfo}
                        {localInfo.name}{localInfo.type[localInfo.type.length - 1]}
                    {:else}
                        로딩중
                    {/if}
                    
                </h1>
            </Load>
        </local>
        <chart>
            <Chart/>
        </chart>
    </section>
</main>
