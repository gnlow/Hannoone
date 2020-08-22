import { ServerRequest } from "https://deno.land/std/http/server.ts"
import jijache from "https://raw.githubusercontent.com/gnlow/jijache/master/api/data.ts"
import query from "./util/query.ts"
import basicHeader from "./util/basicHeader.ts"

export default async (req: ServerRequest) => {
    const local = jijache[query(req.url, "local") || ""]
    if (local) {
        req.respond({
            body: JSON.stringify(local), 
            headers: basicHeader("application/json")
        })
    } else {
        req.respond({
            body: "잘못된 지자체 명칭입니다.",
            status: 404,
            headers: basicHeader()
        })
    }
}