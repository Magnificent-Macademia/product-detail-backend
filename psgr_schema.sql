-- Database: products_api
-- DROP DATABASE IF EXISTS products_api;
CREATE DATABASE products_api
    WITH
    OWNER = daryakutovaya
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.product

-- DROP TABLE IF EXISTS public.product;

CREATE TABLE IF NOT EXISTS public.product
(
    id bigint NOT NULL DEFAULT nextval('product_id_seq'::regclass),
    name character varying COLLATE pg_catalog."default",
    slogan character varying COLLATE pg_catalog."default",
    description character varying COLLATE pg_catalog."default",
    category character varying COLLATE pg_catalog."default",
    default_price integer,
    CONSTRAINT product_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;


ALTER TABLE IF EXISTS public.product

-- Table: public.styles

-- DROP TABLE IF EXISTS public.styles;

CREATE TABLE IF NOT EXISTS public.styles
(
    id bigint NOT NULL DEFAULT nextval('styles_id_seq'::regclass),
    "productId" bigint NOT NULL DEFAULT nextval('"styles_productId_seq"'::regclass),
    name character varying COLLATE pg_catalog."default",
    sale_price character varying COLLATE pg_catalog."default",
    original_price integer,
    default_style integer,
    CONSTRAINT styles_pkey PRIMARY KEY (id),
    CONSTRAINT "productId" FOREIGN KEY ("productId")
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;
ALTER TABLE IF EXISTS public.styles

-- Table: public.features

-- DROP TABLE IF EXISTS public.features;

CREATE TABLE IF NOT EXISTS public.features
(
    id bigint NOT NULL DEFAULT nextval('features_id_seq'::regclass),
    "productId" bigint NOT NULL DEFAULT nextval('"features_productId_seq"'::regclass),
    feature character varying COLLATE pg_catalog."default",
    value character varying COLLATE pg_catalog."default",
    CONSTRAINT features_pkey PRIMARY KEY (id),
    CONSTRAINT "productId" FOREIGN KEY ("productId")
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.features

-- Table: public.photos

-- DROP TABLE IF EXISTS public.photos;

CREATE TABLE IF NOT EXISTS public.photos
(
    id bigint NOT NULL DEFAULT nextval('photos_id_seq'::regclass),
    "styleId" bigint NOT NULL DEFAULT nextval('"photos_styleId_seq"'::regclass),
    url character varying COLLATE pg_catalog."default",
    thumbnail_url character varying COLLATE pg_catalog."default",
    CONSTRAINT photos_pkey PRIMARY KEY (id),
    CONSTRAINT "styleId" FOREIGN KEY ("styleId")
        REFERENCES public.styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.photos
    --OWNER to daryakutovaya;

-- Table: public.skus

-- DROP TABLE IF EXISTS public.skus;

CREATE TABLE IF NOT EXISTS public.skus
(
    id integer NOT NULL,
    "styleId" integer,
    size character varying COLLATE pg_catalog."default",
    quantity integer,
    CONSTRAINT skus_pkey PRIMARY KEY (id),
    CONSTRAINT "styleId" FOREIGN KEY ("styleId")
        REFERENCES public.styles (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.skus

-- Table: public.related

-- DROP TABLE IF EXISTS public.related;

CREATE TABLE IF NOT EXISTS public.related
(
    id integer NOT NULL,
    current_product_id bigint NOT NULL DEFAULT nextval('related_current_product_id_seq'::regclass),
    related_product_id bigint NOT NULL DEFAULT nextval('related_related_product_id_seq'::regclass),
    CONSTRAINT related_pkey PRIMARY KEY (id),
    CONSTRAINT current_product_id FOREIGN KEY (current_product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.related

--
-- COPY product
-- FROM '/Users/daryakutovaya/VisualStudio/HackReactor/product-detail-backend/data-for-api/product.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY styles
-- FROM '/Users/daryakutovaya/VisualStudio/HackReactor/data-for-api/styles.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY features
-- FROM '/Users/daryakutovaya/VisualStudio/HackReactor/data-for-api/features.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY photos
-- FROM '/Users/daryakutovaya/VisualStudio/HackReactor/data-for-api/photos.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY related
-- FROM '/Users/daryakutovaya/VisualStudio/HackReactor/data-for-api/related.csv'
-- DELIMITER ','
-- CSV HEADER;

-- COPY skus
-- FROM '/Users/daryakutovaya/VisualStudio/HackReactor/data-for-api/skus.csv'
-- DELIMITER ','
-- CSV HEADER;

--
