CREATE TABLE `AddLink` (
	`id` INT(12) NOT NULL AUTO_INCREMENT,
	`name` varchar(50) NOT NULL,
	`url` varchar(255) NOT NULL,
	`userId` INT(12) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `Bookmark` (
	`id` INT(12) NOT NULL AUTO_INCREMENT,
	`articleLink` varchar(255) NOT NULL,
	`userId` INT(12) NOT NULL,
	`articleName` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `User` (
	`id` INT(12) NOT NULL AUTO_INCREMENT,
	`mobileNumber` varchar(20) NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `AddLink` ADD CONSTRAINT `AddLink_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

ALTER TABLE `Bookmark` ADD CONSTRAINT `Bookmark_fk0` FOREIGN KEY (`userId`) REFERENCES `User`(`id`);

