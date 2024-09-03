// Import the Prisma client instance

import prisma from "@/service/db.service"

export async function getLog(userId: string) {

  const latestLog = await prisma.logs.findFirst({
    where: {
      userId: userId
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  if (latestLog && latestLog.exitTime === null) {
    return {
      logId: latestLog.logId,
      exitTime: false
    }
  } else {
    const newLog = await prisma.logs.create({
      data: {
        userId: userId,
      }
    })

    return {
      logId: newLog.logId,
      enterTime: false
    }
  }
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