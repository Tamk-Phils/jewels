-- ============================================================
-- Run this entire script in the Supabase SQL Editor
-- Dashboard → SQL Editor → New query → paste → Run
-- ============================================================

-- 1. Create the user if they don't already exist
-- (Supabase stores passwords as bcrypt hashes via pgcrypto)
DO $$
DECLARE
  v_uid uuid;
BEGIN
  -- Check if the user already exists
  SELECT id INTO v_uid
  FROM auth.users
  WHERE email = 'support@marchell0thejeweler.com';

  IF v_uid IS NULL THEN
    -- Create new user
    INSERT INTO auth.users (
      instance_id,
      id,
      aud,
      role,
      email,
      encrypted_password,
      email_confirmed_at,
      recovery_sent_at,
      last_sign_in_at,
      raw_app_meta_data,
      raw_user_meta_data,
      created_at,
      updated_at,
      confirmation_token,
      email_change,
      email_change_token_new,
      recovery_token
    ) VALUES (
      '00000000-0000-0000-0000-000000000000',
      gen_random_uuid(),
      'authenticated',
      'authenticated',
      'support@marchell0thejeweler.com',
      crypt('admin123', gen_salt('bf')),
      now(),
      now(),
      now(),
      '{"provider":"email","providers":["email"]}',
      '{"full_name":"Marchello Admin"}',
      now(),
      now(),
      '',
      '',
      '',
      ''
    )
    RETURNING id INTO v_uid;

    RAISE NOTICE 'Created new user with id: %', v_uid;
  ELSE
    -- User exists — just update their password
    UPDATE auth.users
    SET
      encrypted_password = crypt('admin123', gen_salt('bf')),
      updated_at = now()
    WHERE id = v_uid;

    RAISE NOTICE 'Updated password for existing user with id: %', v_uid;
  END IF;

  -- 2. Grant admin role (idempotent — safe to run multiple times)
  INSERT INTO public.user_roles (user_id, role)
  VALUES (v_uid, 'admin')
  ON CONFLICT DO NOTHING;

  RAISE NOTICE 'Admin role granted to user: %', v_uid;
END $$;
