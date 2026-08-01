import { supabase } from "@/integrations/supabase/client";

export type MediaItem = {
  url: string;              // public URL for display
  path: string;             // storage object path
  type: "image" | "video";
  poster?: string | null;   // optional poster for videos
};

const BUCKET = "product-media";

/** Get direct public URL for a storage object path. */
export function getPublicMediaUrl(path: string): string {
  const { data } = supabase.storage.from(BUCKET).getPublicUrl(path);
  return data?.publicUrl ?? "";
}

/** Sign a storage path into a long-lived URL (1 year). */
export async function signMediaPath(path: string): Promise<string> {
  try {
    const { data } = await supabase.storage.from(BUCKET).createSignedUrl(path, 60 * 60 * 24 * 365);
    if (data?.signedUrl) return data.signedUrl;
  } catch (e) {
    console.warn("Could not sign media path, falling back to public URL", e);
  }
  return getPublicMediaUrl(path);
}

export async function uploadMediaFile(file: File): Promise<MediaItem> {
  const ext = file.name.split(".").pop() ?? "bin";
  const path = `${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    cacheControl: "31536000",
    contentType: file.type || undefined,
    upsert: true,
  });
  if (error) throw error;
  const url = getPublicMediaUrl(path);
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
