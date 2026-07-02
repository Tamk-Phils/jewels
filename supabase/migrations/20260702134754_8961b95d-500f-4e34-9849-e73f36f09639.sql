
-- Public read for product-media (signed URLs work; enables anon SELECT)
CREATE POLICY "product-media public read"
  ON storage.objects FOR SELECT
  USING (bucket_id = 'product-media');

CREATE POLICY "product-media admin insert"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id = 'product-media' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "product-media admin update"
  ON storage.objects FOR UPDATE
  TO authenticated
  USING (bucket_id = 'product-media' AND public.has_role(auth.uid(), 'admin'));

CREATE POLICY "product-media admin delete"
  ON storage.objects FOR DELETE
  TO authenticated
  USING (bucket_id = 'product-media' AND public.has_role(auth.uid(), 'admin'));

-- Rich media (photos + videos) on products
ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS media jsonb NOT NULL DEFAULT '[]'::jsonb;
