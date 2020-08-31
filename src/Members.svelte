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

    const order = members => {
        let partyMap = {}
        Object.keys(parties).forEach((party, i) => partyMap[party] = i)

        let result = Array(Object.keys(parties).length).fill().map(x => [])
        console.log(result, partyMap)
        members.forEach(member => {
            result[partyMap[member.party]].push(member)
        })
        return result.flat()
    }

    const members = order(localInfo.members)
</script>
<ul>
    {#each members as { name, party }, i}
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