// Import the Prisma client instance

import { axiosService } from "./axios.service";

export interface LogRes {
    logId: string, 
    enterTime: boolean, 
    exitTime?: boolean
}

export async function getLog(userId: string) {
    const logRes = await axiosService.GET<LogRes>(`log_route/${userId}`)
    return logRes
}

export async function updateLog(logId: string, enterTime?: Date | string, exitTime?: Date | string) {
    const logRes = await axiosService.POST(`log_route`, {logId, enterTime, exitTime})
    return logRes
  }