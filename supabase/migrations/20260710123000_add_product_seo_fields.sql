-- Add SEO fields to products table
ALTER TABLE public.products
ADD COLUMN focus_keyphrase text,
ADD COLUMN seo_title text,
ADD COLUMN seo_meta_description text,
ADD COLUMN tags text;
