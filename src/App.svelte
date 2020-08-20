<style>
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
    }
</style>

<script>
    import { onMount } from "svelte"
    export let date, local
    
    const params = (new URL(location)).searchParams
    local = params.get("local")

    onMount(async () => {

        const res = await fetch("/api/date")
        const newDate = await res.text()
        date = newDate
    })
</script>

<main>
    <header>
        <h1>한눈에</h1>
    </header>
    <section>
        <local>
            <img src="https://raw.githubusercontent.com/gnlow/jijache/master/logo/{local}.png" alt="" />
        </local>
        
        <p>{date ? date : 'Loading date...'}</p>
    </section>
</main>
