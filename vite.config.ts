import { fileURLToPath, URL } from "node:url";
import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { Resend } from "resend";

function netlifyFunctionsDevPlugin(): Plugin {
  return {
    name: "vite-plugin-netlify-functions-dev",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url?.startsWith("/.netlify/functions/email")) {
          if (req.method === "OPTIONS") {
            res.setHeader("Access-Control-Allow-Origin", "*");
            res.setHeader("Access-Control-Allow-Headers", "Content-Type");
            res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
            res.statusCode = 200;
            res.end();
            return;
          }

          if (req.method === "POST") {
            let bodyStr = "";
            req.on("data", (chunk) => {
              bodyStr += chunk;
            });
            req.on("end", async () => {
              try {
                const data = JSON.parse(bodyStr || "{}");
                const { type, payload } = data;
                const resendApiKey = process.env.RESEND_API_KEY;
                const resend = resendApiKey ? new Resend(resendApiKey) : null;
                const adminEmail = process.env.ADMIN_EMAIL || "support@marchell0thejeweler.com";

                const sendMailHelper = async ({ to, subject, html, replyTo }: { to: string; subject: string; html: string; replyTo?: string }) => {
                  if (resend) {
                    try {
                      const { data: rData, error } = await resend.emails.send({
                        from: "Marchello The Jeweler <onboarding@resend.dev>",
                        to,
                        subject,
                        html,
                        replyTo,
                      });
                      if (error) {
                        if (error.message?.includes("testing emails to your own email address") || (error as any).name === "validation_error") {
                          const fb = await resend.emails.send({
                            from: "Marchello The Jeweler <onboarding@resend.dev>",
                            to: "phils7872@gmail.com",
                            subject: `[FORWARDED LOCAL DEV TEST] ${subject}`,
                            html: `<div style="padding:10px;background:#fff3cd;font-family:sans-serif;margin-bottom:12px;"><strong>Notice:</strong> Original recipient was <em>${to}</em> (Resend testing mode).</div>${html}`,
                            replyTo,
                          });
                          return fb.data;
                        }
                      }
                      return rData;
                    } catch (e) {
                      console.error("[Local Dev Email Error]:", e);
                    }
                  }
                };

                if (type === "contact") {
                  // 1. Admin Alert
                  await sendMailHelper({
                    to: adminEmail,
                    replyTo: payload.email,
                    subject: `New Contact Inquiry from ${payload.name}`,
                    html: `<div style="font-family:sans-serif;"><h2 style="color:#b8912d;">New Contact Inquiry</h2><p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Message:</strong> ${payload.message}</p></div>`,
                  });
                  // 2. Customer Auto-Reply
                  await sendMailHelper({
                    to: payload.email,
                    subject: `We've received your message — Marchello The Jeweler`,
                    html: `<div style="font-family:sans-serif;"><h2>Hello ${payload.name},</h2><p>Thank you for reaching out to <strong>Marchello The Jeweler</strong>. We have received your inquiry and our personal shopping support team will get back to you momentarily.</p></div>`,
                  });
                } else if (type === "order") {
                  await sendMailHelper({
                    to: payload.customer_email || adminEmail,
                    subject: `Order Confirmation - ${payload.order_number} | Marchello The Jeweler`,
                    html: `<div style="font-family:sans-serif;"><h2>Order Confirmation (${payload.order_number})</h2><p>Customer: ${payload.customer_name}</p><p>Total: $${payload.total}</p></div>`,
                  });
                }

                res.setHeader("Content-Type", "application/json");
                res.setHeader("Access-Control-Allow-Origin", "*");
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true }));
              } catch (err: any) {
                console.error("[Local Dev Proxy Error]:", err);
                res.setHeader("Content-Type", "application/json");
                res.statusCode = 200;
                res.end(JSON.stringify({ success: true, warning: err.message }));
              }
            });
            return;
          }
        }
        next();
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), tsconfigPaths(), netlifyFunctionsDevPlugin()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes("node_modules/react/") || id.includes("node_modules/react-dom/")) {
            return "vendor-react";
          }
          if (id.includes("@tanstack/react-router") || id.includes("@tanstack/react-start")) {
            return "vendor-router";
          }
          if (id.includes("@tanstack/react-query")) {
            return "vendor-query";
          }
          if (id.includes("@supabase/")) {
            return "vendor-supabase";
          }
          if (id.includes("@radix-ui/")) {
            return "vendor-radix";
          }
          if (id.includes("lucide-react") || id.includes("sonner") || id.includes("embla-carousel")) {
            return "vendor-ui";
          }
          if (id.includes("react-hook-form") || id.includes("@hookform/") || id.includes("node_modules/zod/")) {
            return "vendor-forms";
          }
        },
      },
    },
  },
});
