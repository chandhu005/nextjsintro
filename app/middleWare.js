import { NextResponse } from "next/server"

export function middleware(req, res, next) {

return NextResponse.redirect(new URL('/',req.url))

}


export const config={
    matcher:['/about/:path*']
}