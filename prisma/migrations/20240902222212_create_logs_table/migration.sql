-- CreateTable
CREATE TABLE "Logs" (
    "logId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "enterTime" TIMESTAMP(3) NOT NULL,
    "exitTime" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Logs_pkey" PRIMARY KEY ("logId")
);
