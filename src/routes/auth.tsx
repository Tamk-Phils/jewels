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

  const go = () => nav({ to: search.redirect ?? "/account" });

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
    toast.message("Google sign-in is unavailable in this local setup.");
    setBusy(false);
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
          <input placeholder="Full name" required value={name} onChange={(e) => setName(e.target.value)} className="auth-input" />
        )}
        <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} className="auth-input" />
        {mode !== "reset" && (
          <input type="password" placeholder="Password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="auth-input" />
        )}
        <button className="btn-gold w-full" disabled={busy}>
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
      <style>{`.auth-input{width:100%;background:transparent;border:1px solid rgba(255,255,255,.18);padding:.85rem 1rem;color:white;font-size:.9rem}.auth-input:focus{outline:none;border-color:var(--gold)}`}</style>
    </div>
  );
}
