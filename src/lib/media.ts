import { supabase } from "@/integrations/supabase/client";

export type MediaItem = {
  url: string;              // public/signed URL for display
  path: string;             // storage object path
  type: "image" | "video";
  poster?: string | null;   // optional poster for videos
};

const BUCKET = "product-media";

/** Sign a storage path into a long-lived URL (1 year). */
export async function signMediaPath(path: string): Promise<string> {
  const { data } = await supabase.storage.from(BUCKET).createSignedUrl(path, 60 * 60 * 24 * 365);
  return data?.signedUrl ?? "";
}

export async function uploadMediaFile(file: File): Promise<MediaItem> {
  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "31536000",
    contentType: file.type || undefined,
    upsert: false,
  });
  if (error) throw error;
  const url = await signMediaPath(path);
  return {
    url,
    path,
    type: file.type.startsWith("video") ? "video" : "image",
  };
}

export async function deleteMediaPath(path: string): Promise<void> {
  await supabase.storage.from(BUCKET).remove([path]);
}

export function isVideo(url: string): boolean {
  return /\.(mp4|webm|mov|m4v|ogg)($|\?)/i.test(url);
}
