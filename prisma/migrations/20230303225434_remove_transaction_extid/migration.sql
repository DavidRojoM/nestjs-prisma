/*
  Warnings:

  - You are about to drop the column `extId` on the `Transaction` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Transaction_extId_key` ON `Transaction`;

-- AlterTable
ALTER TABLE `Transaction` DROP COLUMN `extId`;
