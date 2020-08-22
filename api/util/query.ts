export default (url: string, name: string) => {
    const encoded = url.match(new RegExp(`[?&]${name}=(.*?)(?:$|&)`))?.[1]
    return encoded ? decodeURI(encoded) : undefined
}