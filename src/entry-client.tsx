import { StrictMode, startTransition } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { QueryClient } from "@tanstack/react-query";
import { RouterProvider } from "@tanstack/react-router";
import { hydrate } from "@tanstack/router-core/ssr/client";
import "./styles.css";
import { getRouter } from "./router";

const queryClient = new QueryClient();
const router = getRouter(queryClient);
const hasBootstrapData = typeof window !== "undefined" && !!window.$_TSR?.router;

startTransition(() => {
  const app = (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );

  if (hasBootstrapData) {
    void hydrate(router).then(() => {
      hydrateRoot(document, app);
    });
    return;
  }

  createRoot(document).render(app);
});
