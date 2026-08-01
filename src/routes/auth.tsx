import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const searchSchema = z.object({ redirect: z.string().optional() });

export const Route = createFileRoute("/auth")({
  head: () => ({ meta: [{ title: "Sign In — Marchello" }] }),
  validateSearch: searchSchema,
  component: AuthPage,
});

function AuthPage() {
  const nav = useNavigate();
  const search = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"signin" | "signup" | "reset">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);

  const go = async () => {
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      const { data: roleRow } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      if (roleRow) {
        nav({ to: "/admin" });
        return;
      }
    }
    nav({ to: search.redirect ?? "/account" });
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email, password,
          options: {
            data: { full_name: name },
            emailRedirectTo: typeof window !== "undefined" ? window.location.origin : undefined,
          },
        });
        if (error) throw error;
        toast.success("Check your email to confirm.");
      } else if (mode === "signin") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Welcome back");
        go();
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: typeof window !== "undefined" ? `${window.location.origin}/auth` : undefined,
        });
        if (error) throw error;
        toast.success("Password reset link sent");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Authentication failed");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setBusy(true);
    try {
      const redirectTo = typeof window !== "undefined"
        ? `${window.location.origin}${search.redirect ? `?redirect=${encodeURIComponent(search.redirect)}` : "/account"}`
        : undefined;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });
      if (error) throw error;
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Google sign in failed";
      if (msg.toLowerCase().includes("provider is not enabled") || msg.toLowerCase().includes("unsupported provider")) {
        toast.error("Google login is currently disabled in your Supabase Auth settings. Please log in with Email & Password or enable Google in Supabase Dashboard.");
      } else {
        toast.error(msg);
      }
      setBusy(false);
    }
  };

  return (
    <div className="container-luxe py-16 md:py-24 max-w-md">
      <div className="text-center mb-10">
        <Link to="/" className="font-display text-3xl">MARCHELLO<span className="text-gold">.</span></Link>
        <h1 className="font-display text-3xl mt-6">
          {mode === "signin" && "Welcome back"}
          {mode === "signup" && "Create your account"}
          {mode === "reset" && "Reset your password"}
        </h1>
      </div>

      {mode !== "reset" && (
        <>
          <button onClick={google} disabled={busy} className="btn-ghost-gold w-full">
            Continue with Google
          </button>
          <div className="my-6 flex items-center gap-3 text-xs text-foreground/40">
            <div className="flex-1 h-px bg-white/10" /> OR <div className="flex-1 h-px bg-white/10" />
          </div>
        </>
      )}

      <form onSubmit={submit} className="space-y-4">
        {mode === "signup" && (
          <input placeholder="Full name" required value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-white text-black border-2 border-black rounded px-4 py-3 focus:border-gold focus:outline-none placeholder:text-gray-500 font-medium" />
        )}
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-white text-black border-2 border-black rounded px-4 py-3 focus:border-gold focus:outline-none placeholder:text-gray-500 font-medium" />
        {mode !== "reset" && (
          <input type="password" placeholder="Password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-white text-black border-2 border-black rounded px-4 py-3 focus:border-gold focus:outline-none placeholder:text-gray-500 font-medium" />
        )}
        <button className="btn-gold w-full py-3.5 font-bold" disabled={busy}>
          {mode === "signin" && "Sign In"}
          {mode === "signup" && "Create Account"}
          {mode === "reset" && "Send Reset Link"}
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-foreground/60 space-y-2">
        {mode === "signin" && (
          <>
            <div>
              <button onClick={() => setMode("reset")} className="hover:text-gold">Forgot password?</button>
            </div>
            <div>
              New here?{" "}
              <button onClick={() => setMode("signup")} className="text-gold hover:underline">Create an account</button>
            </div>
          </>
        )}
        {mode === "signup" && (
          <div>
            Already have an account?{" "}
            <button onClick={() => setMode("signin")} className="text-gold hover:underline">Sign in</button>
          </div>
        )}
        {mode === "reset" && (
          <button onClick={() => setMode("signin")} className="hover:text-gold">Back to sign in</button>
        )}
      </div>
    </div>
  );
}
