<script lang="typescript">
    export let width, height, data
    import parliamentSVG from "parliament-svg"
    import toHTML from "vdom-to-html"
    import partyInfo from "./parties.js"
    
    let parties = {}
    data.forEach(({party}) => {
        if (!parties[party]) {
            parties[party] = {
                seats: 0,
                colour: partyInfo[party].color.primary
            }
        }
        parties[party].seats += 1
    })
    console.log(parties)
    const vdom = parliamentSVG(parties, true)
    delete vdom.children[vdom.children.length - 1].properties.style["font-family"]
    vdom.properties.width = width
    vdom.properties.height = height
    const chart = toHTML(vdom)
    
</script>

{@html chart}