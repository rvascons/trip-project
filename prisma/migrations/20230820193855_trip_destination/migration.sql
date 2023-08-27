/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Trip` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `destination` to the `Trip` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `Trip` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "description" TEXT,
ADD COLUMN     "destination" TEXT NOT NULL,
ALTER COLUMN "name" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Trip_name_key" ON "Trip"("name");
