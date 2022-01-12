DROP DATABASE IF EXISTS Atelier;

CREATE DATABASE Atelier;

USE Atelier;

DROP TABLE IF EXISTS `Products`;

CREATE TABLE `Products` (
  `product_id` VARCHAR(20) NOT NULL,
  `product_name` VARCHAR(50) NOT NULL,
  `product_description` CHAR(100) NOT NULL,
  `product_category` VARCHAR(20) NOT NULL,
  `Styles` INTEGER(10) NOT NULL,
  PRIMARY KEY (`product_id`)
);

-- ---
-- Table 'Styles'
--
-- ---

DROP TABLE IF EXISTS `Styles`;

CREATE TABLE `Styles` (
 `style_id` INTEGER(10) NOT NULL,
  `name` VARCHAR(100) NOT NULL,
  `original_price` INTEGER(10) NOT NULL,
  `sale_price` INTEGER(10) NOT NULL,
  `default` TINYINT(5) NOT NULL,
  `photos` INTEGER(10) NOT NULL,
  `skus` INTEGER(10) NOT NULL,
  PRIMARY KEY (`style_id`)
);

-- ---
-- Table 'Skus'
--
-- ---

DROP TABLE IF EXISTS `Skus`;

CREATE TABLE `Skus` (
  `id` INTEGER  AUTO_INCREMENT NOT NULL,
  `quantity` INTEGER(10)  NOT NULL,
  `size` VARCHAR(5) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS `Photos`;

CREATE TABLE `Photos` (
  `id` INTEGER AUTO_INCREMENT NOT NULL,
  `thubnail_url` VARCHAR(500) NOT NULL,
  `url` INTEGER(500) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `Products` ADD FOREIGN KEY (Styles) REFERENCES `Styles` (`style_id`);
ALTER TABLE `Styles` ADD FOREIGN KEY (photos) REFERENCES `Photos` (`id`);
ALTER TABLE `Styles` ADD FOREIGN KEY (skus) REFERENCES `Skus` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`product_id`,`product_name`,`product_description`,`product_category`,`Styles`) VALUES
-- ('','','','','');
-- INSERT INTO `Styles` (`name`,`original_price`,`sale_price`,`default`,`photos`,`style_id`,`skus`) VALUES
-- ('','','','','','','');
-- INSERT INTO `Skus` (`id`,`quantity`,`size`) VALUES
-- ('','','');
-- INSERT INTO `Photos` (`id`,`thubnail_url`,`url`) VALUES
-- ('','','');