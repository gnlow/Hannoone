<script lang="typescript">
    export let width, height, data
    import parliamentSVG from "parliament-svg"
    import toHTML from "vdom-to-html"

    const colors = {
        "더불어민주당": "#008ccd",
        "미래통합당": "#ef426f",
        "정의당": "#ffcc00",
        "국민의당": "#ea5504",
        "열린민주당": "#003e98",
        "기본소득당": "#82c8b4",
        "시대전환": "#5a147e",
        "민생당": "#0ba95f",
        "진보당": "#d6001c",
        "깨어있는시민연대당": "#000078",
        "무소속": "#BBBBBB",
        "공석": "#ffffff",
    }
    let parties = {}
    data.forEach(({party}) => {
        if (!parties[party]) {
            parties[party] = {
                seats: 0,
                colour: colors[party]
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