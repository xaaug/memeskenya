"use client";

import { useState, useRef } from "react";
import { extractTextFromImage } from "@/lib/ocr";
import { Button } from "@/components/ui/button";
import { Loader2, Upload } from "lucide-react";

export default function ImageUploader({
  onComplete,
}: {
  onComplete: (data: { text: string; file: File }[]) => void;
}) {
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleFiles = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;
    setLoading(true);

    const data: { text: string; file: File }[] = [];

    for (const file of Array.from(files)) {
      const text = await extractTextFromImage(file);
      data.push({ file, text: text || "[No text detected]" });
    }

    onComplete(data);
    setLoading(false);
  };

  return (
    <div className="space-y-4">
      <input
        ref={inputRef}
        type="file"
        multiple
        accept="image/*"
        onChange={handleFiles}
        className="hidden"
      />

      <Button variant="outline" onClick={handleClick} disabled={loading}>
        {loading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Extracting...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload Images
          </>
        )}
      </Button>

      {loading && (
        <p className="text-sm text-muted-foreground">OCR in progress...</p>
      )}
    </div>
  );
}
