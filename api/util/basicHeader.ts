export default (type: string = "text/plain") => 
    new Headers([
        ["content-type", `${type}; charset=utf-8`]
    ])
