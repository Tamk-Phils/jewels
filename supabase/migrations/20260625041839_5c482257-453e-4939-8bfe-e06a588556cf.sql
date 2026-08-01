
GRANT EXECUTE ON FUNCTION public.has_role(uuid, app_role) TO PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.handle_new_user() FROM PUBLIC, anon, authenticated;
REVOKE EXECUTE ON FUNCTION public.tg_set_updated_at() FROM PUBLIC, anon, authenticated;
-- has_role is SECURITY DEFINER and used inside RLS policies; execution granted to authenticated/anon.
