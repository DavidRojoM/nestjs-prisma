-- AlterTable
ALTER TABLE `Transaction` ADD COLUMN `currency` ENUM('EUR', 'USD', 'CAD') NOT NULL DEFAULT 'EUR';
