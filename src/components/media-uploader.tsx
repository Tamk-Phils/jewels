import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { UploadCloud, X, Loader2, Star, GripVertical, Play } from "lucide-react";
import { toast } from "sonner";
import { uploadMediaFile, deleteMediaPath, type MediaItem } from "@/lib/media";

type Props = {
  value: MediaItem[];
  onChange: (next: MediaItem[]) => void;
};

export function MediaUploader({ value, onChange }: Props) {
  const [uploading, setUploading] = useState(0);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  const onDrop = useCallback(async (files: File[]) => {
    setUploading((c) => c + files.length);
    const results: MediaItem[] = [];
    for (const f of files) {
      try {
        if (f.size > 100 * 1024 * 1024) {
          toast.error(`${f.name} exceeds 100MB`);
          continue;
        }
        const item = await uploadMediaFile(f);
        results.push(item);
      } catch (e) {
        console.error(e);
        toast.error(`Upload failed: ${f.name}`);
      }
    }
    onChange([...value, ...results]);
    setUploading((c) => Math.max(0, c - files.length));
    if (results.length) toast.success(`Uploaded ${results.length} file(s)`);
  }, [value, onChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".webp", ".gif", ".avif"],
      "video/*": [".mp4", ".webm", ".mov", ".m4v"],
    },
    multiple: true,
  });

  const remove = async (idx: number) => {
    const item = value[idx];
    const next = value.filter((_, i) => i !== idx);
    onChange(next);
    if (item?.path) {
      try { await deleteMediaPath(item.path); } catch { /* ignore */ }
    }
  };

  const makePrimary = (idx: number) => {
    if (idx === 0) return;
    const next = [...value];
    const [item] = next.splice(idx, 1);
    next.unshift(item);
    onChange(next);
  };

  const onDragStart = (i: number) => setDragIndex(i);
  const onDragOver = (e: React.DragEvent, i: number) => {
    e.preventDefault();
    if (dragIndex === null || dragIndex === i) return;
    const next = [...value];
    const [moved] = next.splice(dragIndex, 1);
    next.splice(i, 0, moved);
    setDragIndex(i);
    onChange(next);
  };
  const onDragEnd = () => setDragIndex(null);

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-8 text-center cursor-pointer transition-colors ${
          isDragActive ? "border-[var(--gold)] bg-[var(--gold)]/5" : "border-foreground/20 hover:border-[var(--gold)]/60"
        }`}
      >
        <input {...getInputProps()} />
        <UploadCloud className="h-8 w-8 mx-auto text-gold mb-3" />
        <div className="font-medium">
          {isDragActive ? "Drop files here" : "Drag & drop photos or videos"}
        </div>
        <div className="text-xs text-foreground/50 mt-1">
          Or click to browse • Images (jpg, png, webp) or Videos (mp4, webm, mov) • up to 100MB
        </div>
        {uploading > 0 && (
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gold">
            <Loader2 className="h-3 w-3 animate-spin" /> Uploading {uploading}…
          </div>
        )}
      </div>

      {value.length > 0 && (
        <>
          <div className="text-xs text-foreground/60">
            The first item is the cover image. Drag to reorder, or click ★ to make primary.
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {value.map((m, i) => (
              <div
                key={m.path}
                draggable
                onDragStart={() => onDragStart(i)}
                onDragOver={(e) => onDragOver(e, i)}
                onDragEnd={onDragEnd}
                className={`relative group border ${i === 0 ? "border-[var(--gold)]" : "border-foreground/10"} bg-black/5 aspect-square overflow-hidden`}
              >
                {m.type === "video" ? (
                  <>
                    <video src={m.url} className="h-full w-full object-cover" muted playsInline />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <Play className="h-8 w-8 text-white drop-shadow" />
                    </div>
                  </>
                ) : (
                  <img src={m.url} alt="" className="h-full w-full object-cover" />
                )}
                {i === 0 && (
                  <span className="absolute top-1 left-1 bg-[var(--gold)] text-black text-[9px] px-1.5 py-0.5 font-medium uppercase tracking-wider">
                    Cover
                  </span>
                )}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  <button
                    type="button"
                    onClick={() => makePrimary(i)}
                    className="p-1.5 bg-white text-black rounded"
                    aria-label="Make cover"
                  >
                    <Star className="h-3.5 w-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => remove(i)}
                    className="p-1.5 bg-white text-black rounded"
                    aria-label="Remove"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <span className="p-1.5 bg-white text-black rounded cursor-grab">
                    <GripVertical className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
