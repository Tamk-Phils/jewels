-- Fix permission denied for function has_role
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO PUBLIC, anon, authenticated;
