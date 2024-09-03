import { NextRequest, NextResponse } from "next/server";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { getLog } from "@/service/logs.service";

export async function GET(req: NextRequest, { params } : { params: Params }) {
    try {
        const { userId } = params
        const log = await getLog(userId)
        return NextResponse.json(log, { status: 200 })
    } catch (error) {
            console.log('GET - couldnt get the log', error)
            return NextResponse.json(`couldnt get the log - ${error}`, { status: 500 })
    }
}

