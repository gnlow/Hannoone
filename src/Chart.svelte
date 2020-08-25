<script>
    export let width, height
    import parliamentSVG from "parliament-svg"
    import toStr from "virtual-dom-stringify"
    const vdom = parliamentSVG({
        "linke": {
            "seats": 6,
            "colour": "#a08"
        },
        "spd": {
            "seats": 19,
            "colour": "#e02"
        },
        "gruene": {
            "seats": 6,
            "colour": "#0b2"
        },
        "union": {
            "seats": 31,
            "colour": "#333"
        }
    }, true)
    delete vdom.children[vdom.children.length - 1].properties.style["font-family"]
    vdom.properties.width = width
    vdom.properties.height = height
    const chart = toStr(vdom)
    
</script>

{@html chart}