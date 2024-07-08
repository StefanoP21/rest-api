/*
  Warnings:

  - You are about to alter the column `total` on the `order` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,2)`.
  - You are about to alter the column `price` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(12,2)`.

*/
-- AlterTable
ALTER TABLE `order` MODIFY `total` DECIMAL(12, 2) NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `price` DECIMAL(12, 2) NOT NULL;
