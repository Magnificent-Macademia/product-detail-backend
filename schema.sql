-- DROP DATABASE IF EXISTS Atelier;

-- CREATE DATABASE Atelier;

-- USE Atelier;

-- DROP TABLE IF EXISTS `Products`;
--Pay attention to data type


CREATE TABLE `Products` (
  `product_id` BIGSERIAL(10) NOT NULL,
  `product_name` VARCHAR (100) NOT NULL,
  `product_slogan` VARCHAR(100) NOT NULL,
  `product_description` VARCHAR(500) NOT NULL,
  `product_category` VARCHAR(50) NOT NULL,
  `product_default_price` INTEGER(10)  NOT NULL,
    PRIMARY KEY (`product_id`)
);


-- ALTER TABLE Products ADD CONSTRAINT products_pkey PRIMARY KEY (product_id);
-- ---
-- Table 'Styles'
--
-- ---FOREIGN KEY(product_id) REFERENCES Products (product_id)

DROP TABLE IF EXISTS `Styles`;

CREATE TABLE `Styles` (
  `styles_id` BIGSERIAL(10) NOT NULL,
  `product_id` BIGSERIAL(10) NOT NULL,
  `styles_name` VARCHAR(100)  NOT NULL,
  `styles_original_price` INTEGER(10)  NOT NULL,
  `styles_sale_price` INTEGER(10) NOT NULL,
  `styles_default` BOOLEAN(TRUE) NOT NULL,
  PRIMARY KEY (`styles_id`)
  FOREIGN KEY(product_id) REFERENCES Products (product_id)
);

-- ---
-- Table 'Photos'
--
-- ---

DROP TABLE IF EXISTS `Photos`;

CREATE TABLE `Photos` (
  `styles_id` BIGSERIAL(10) NOT NULL,
  `photos_id` INTEGER(10) AUTOINCREMENT NOT NULL,
  `photos_thumbnail_url` VARCHAR(500) NOT NULL,
  `photos_url` VARCHAR(500) NOT NULL,
  PRIMARY KEY (`photos_id`)
  FOREIGN KEY(styles_id) REFERENCES Styles (styles_id)
);

-- ---
-- Table 'Skus'
--
-- ---

DROP TABLE IF EXISTS `Skus`;

CREATE TABLE `Skus` (
  `styles_id` BIGSERIAL(10) NOT NULL,
  `skus_id` BIGSERIAL(10) NOT NULL,
  `skus_quantity` INTEGER(10) NOT NULL,
  `skus_size` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`skus_id`)
   FOREIGN KEY(styles_id) REFERENCES Styles (styles_id)
);

-- ---
-- Table 'Related'
--
-- --- JOIN Table between parent id to children id
DROP TABLE IF EXISTS `Related`;

CREATE TABLE `Related` (
 `id` SERIAL (10) UNIQUE NOT NULL,
  `related_parent_id` INTEGER(10)  NOT NULL,
  `child_related_id` INTEGER(10)  NOT NULL,
  PRIMARY KEY (`id`)
   FOREIGN KEY(related_parent_id) REFERENCES Products (product_id)
);

-- ---
-- Table 'Features'
--
-- ---

DROP TABLE IF EXISTS `Features`;

CREATE TABLE `Features` (
  `feature_id` INTEGER(10) AUTOINCREMENT NOT NULL,
  `feature_main` VARCHAR(50) NOT NULL,
  `features_value` VARCHAR(50) NOT NULL,
  `product_id` BIGSERIAL(10) NOT NULL,
   PRIMARY KEY (`feature_id`)
  FOREIGN KEY(product_id) REFERENCES Products (product_id)
);

-- ---
-- Foreign Key
-- ---
-- Product id is foreign key in features table
-- ALTER TABLE `Products` ADD FOREIGN KEY (product_features) REFERENCES `Features` (`feature_id`);
-- ALTER TABLE `Products` ADD FOREIGN KEY (product_styles) REFERENCES `Styles` (`styles_id`);
-- ALTER TABLE `Styles` ADD FOREIGN KEY (styles_photos) REFERENCES `Photos` (`photos_id`);
-- ALTER TABLE `Styles` ADD FOREIGN KEY (styles_skus) REFERENCES `Skus` (`skus_id`);
-- ALTER TABLE `Related` ADD FOREIGN KEY (child_related_id) REFERENCES `Products` (`product_id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `Products` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Styles` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Photos` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Skus` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Related` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `Features` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `Products` (`product_id`,`product_name`,`product_description`,`product_slogan`,`product_category`,`product_default_price`,`product_features`,`product_styles`) VALUES
-- ('63609','Camo Onesie','The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.','Blend in to your crowd','Jackets','140.00','[]','[]');


-- INSERT INTO `Styles` (`styles_id`,`styles_name`,`styles_original_price`,`styles_sale_price`,`styles_default`,`styles_photos`,`styles_skus`) VALUES
-- ('391646','Forest Green & Black','140.00','100.00','1','[]','[]');

-- INSERT INTO `Photos` (`photos_id`,`photos_thumbnail_url`,`photos_url`) VALUES
-- ('0','https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80','https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80');
-- ('1','https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80','https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80');


-- INSERT INTO `Skus` (`skus_id`,`skus_quantity`,`skus_size`) VALUES
-- ('2275489','8','XS');


-- INSERT INTO `Related` (`related_parent_id`,`child_related_id`) VALUES
-- ('63613','63614');
-- ('63613','63616');
-- ('63613','63617');
-- ('63613','63609');
-- ('63613','63611');


-- INSERT INTO `Features` (`feature_id`,`feature_main`,`features_value`) VALUES
-- ('0','Fabric','Canvas');
-- ('1','Fabric','Canvas');