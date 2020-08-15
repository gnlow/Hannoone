import { ServerRequest } from 'https://deno.land/std/http/server.ts'

export default async (req: ServerRequest) => {
    const date = new Date().toString()
    req.respond({
        body: date
    })
}