/*
  Warnings:

  - You are about to drop the column `number` on the `client` table. All the data in the column will be lost.
  - Added the required column `phone` to the `Client` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `client` DROP COLUMN `number`,
    ADD COLUMN `phone` INTEGER NOT NULL;
