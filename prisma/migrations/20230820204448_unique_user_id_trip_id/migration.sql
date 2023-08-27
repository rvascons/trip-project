/*
  Warnings:

  - A unique constraint covering the columns `[userId,tripId]` on the table `UserTrip` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserTrip_userId_tripId_key" ON "UserTrip"("userId", "tripId");
