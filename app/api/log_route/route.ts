import { NextResponse } from "next/server";
import { updateLog } from "@/service/logs.service";
import { ApplyEntry } from "@/lib/req.types";

export async function POST(req: ApplyEntry) {
    try {
        const { logId, enterTime, exitTime } = await req.json()
        await updateLog(logId, enterTime, exitTime)
        return NextResponse.json('Updted Successfuly', { status: 200 })
    } catch (error) {
            console.log('POST - couldnt post user shifts request', error)
            return NextResponse.json(`couldnt update the log - ${error}`, { status: 500 })
    }
}

