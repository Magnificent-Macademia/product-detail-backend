CREATE DATABASE postgres
    WITH
    OWNER = daryakutovaya
    ENCODING = 'UTF8'
    LC_COLLATE = 'C'
    LC_CTYPE = 'C'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE postgres
    IS 'default administrative connection database';

-- Table: public.product

-- DROP TABLE IF EXISTS public.product;

CREATE TABLE IF NOT EXISTS public.product
(
    id bigint NOT NULL DEFAULT nextval('"Products_id_seq"'::regclass),
    name character varying(100) COLLATE pg_catalog."default",
    slogan character varying(500) COLLATE pg_catalog."default",
    description character varying(1000) COLLATE pg_catalog."default",
    category character varying(100) COLLATE pg_catalog."default",
    default_price integer,
    CONSTRAINT "Products_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.product

-- Table: public.styles

-- DROP TABLE IF EXISTS public.styles;

CREATE TABLE IF NOT EXISTS public.styles
(
    id integer NOT NULL,
    "productId" integer,
    name character varying(100) COLLATE pg_catalog."default",
    sale_price character varying(100) COLLATE pg_catalog."default",
    original_price integer,
    default_style integer,
    CONSTRAINT "Styles_pkey" PRIMARY KEY (id),
    CONSTRAINT "Styles" FOREIGN KEY ("productId")
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
    id integer NOT NULL,
    product_id integer,
    feature character(100) COLLATE pg_catalog."default",
    value character(100) COLLATE pg_catalog."default",
    CONSTRAINT features_pkey PRIMARY KEY (id),
    CONSTRAINT features FOREIGN KEY (product_id)
        REFERENCES public.product (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.features

-- Table: public.photos

-- DROP TABLE IF EXISTS public.photos;

CREATE TABLE IF NOT EXISTS public.photos
(
    id integer NOT NULL,
    "styleId" integer,
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
