import { ServerRequest } from "https://deno.land/std/http/server.ts"
import jijache from "https://raw.githubusercontent.com/gnlow/jijache/master/api/data.ts"
import localCouncil from "https://raw.githubusercontent.com/gnlow/localCouncil/master/mod.ts"
import query from "./util/query.ts"
import basicHeader from "./util/basicHeader.ts"

export default async (req: ServerRequest) => {
    const localName = query(req.url, "local") || ""
    const sourceData = localCouncil.council[localName]
    const local = {
        ...jijache[localName],
        members: sourceData.member.map(member => ({
            code: member,
            ...localCouncil.member[member]
        })),
        highMembers: sourceData.highMember?.map(member => ({
            code: member,
            ...localCouncil.member[member]
        })),
    }
    if (local) {
        req.respond({
            body: JSON.stringify(local), 
            headers: basicHeader("application/json"),
        })
    } else {
        req.respond({
            body: "잘못된 지자체 명칭입니다.",
            status: 404,
            headers: basicHeader()
        })
    }
}