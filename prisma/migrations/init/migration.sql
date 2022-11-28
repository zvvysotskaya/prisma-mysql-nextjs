-- CreateTable
CREATE TABLE `usernames` (
    `idusernames` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(105) NULL,
    `createdAt` DATETIME(0) NULL,

    PRIMARY KEY (`idusernames`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

