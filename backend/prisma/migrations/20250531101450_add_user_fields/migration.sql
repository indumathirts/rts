/*
  Warnings:

  - Added the required column `addressLine1` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `mobile` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `addressLine1` VARCHAR(191) NOT NULL,
    ADD COLUMN `addressLine2` VARCHAR(191) NULL,
    ADD COLUMN `city` VARCHAR(191) NOT NULL,
    ADD COLUMN `district` VARCHAR(191) NULL,
    ADD COLUMN `mobile` VARCHAR(191) NOT NULL,
    ADD COLUMN `pincode` VARCHAR(191) NULL,
    ADD COLUMN `sector` VARCHAR(191) NULL,
    ADD COLUMN `state` VARCHAR(191) NULL;
