/*
  Warnings:

  - You are about to alter the column `first_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - You are about to alter the column `last_name` on the `users` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.
  - A unique constraint covering the columns `[name]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "first_name" SET DATA TYPE VARCHAR(50),
ALTER COLUMN "last_name" SET DATA TYPE VARCHAR(50);

-- CreateIndex
CREATE UNIQUE INDEX "users_name_key" ON "users"("name");
