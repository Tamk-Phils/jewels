import { createServerEntry } from "@tanstack/react-start/server-entry";

const fetch = async (...args: Parameters<Parameters<typeof createServerEntry>[0]["fetch"]>) => {
  const handler = await import("./server.ts");
  return handler.default.fetch(...args);
};

export default createServerEntry({ fetch });
