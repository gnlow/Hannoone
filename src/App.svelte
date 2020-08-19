<script>
    import { onMount } from "svelte";
    export let date;

    onMount(async () => {
        const res = await fetch("/api/date");
        const newDate = await res.text();
        date = newDate;
    });
</script>

<main>
    <header>
        <h1>한눈에</h1>
    </header>
    <section>
        <p>{date ? date : 'Loading date...'}</p>
    </section>
</main>
