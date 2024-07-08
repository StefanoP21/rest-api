/*
  Warnings:

  - You are about to alter the column `phone` on the `client` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `Int`.

*/
-- AlterTable
ALTER TABLE `client` MODIFY `phone` INTEGER NOT NULL;
