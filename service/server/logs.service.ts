// Import the Prisma client instance

import prisma from "@/service/server/db.service"

export async function getLog(userId: string) {

  const latestLog = await prisma.logs.findFirst({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  if (!latestLog || (latestLog.enterTime && latestLog.exitTime)) { // In case there isnt a log or there is a log but it alrady full
    const newLog = await prisma.logs.create({
      data: {
        userId: userId,
      }
    })
    return {
      logId: newLog.logId,
      enterTime: false,
    }
  } else if (latestLog && !latestLog.enterTime && !latestLog.exitTime) {
    return {
      logId: latestLog.logId,
      enterTime: false,
    }
  } 
  else if (latestLog && latestLog.enterTime) return { logId: latestLog.logId, enterTime: true}
}

export async function updateLog(logId: string, enterTime?: string, exitTime?: string) {

    if (!enterTime && !exitTime) {
      throw new Error("No update information provided.");
    }
  
    const updateData: any = {};
    if (enterTime) {
      updateData.enterTime = new Date(enterTime).toISOString();
    }
    if (exitTime) {
      updateData.exitTime = new Date(exitTime).toISOString();
    }
  
    const updatedLog = await prisma.logs.update({
      where: {
        logId: logId,
      },
      data: updateData,
    });
  
    return updatedLog;
  }