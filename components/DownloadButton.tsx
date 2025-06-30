"use client";

import JSZip from "jszip";
import { saveAs } from "file-saver";
import { toPng } from "html-to-image";

import { Button } from "@/components/ui/button";

export const DownloadButton = ({
  refs,
  selected,
}: {
  refs: React.RefObject<HTMLDivElement>[];
  selected: boolean[];
}) => {
  const downloadAll = async () => {
    const zip = new JSZip();

    for (let i = 0; i < refs.length; i++) {
      if (!selected[i]) continue;

      const ref = refs[i];
      if (ref.current) {
        const dataUrl = await toPng(ref.current);
        const blob = await (await fetch(dataUrl)).blob();
        zip.file(`card-${i + 1}.png`, blob);
      } else {
        console.warn(`Card ref ${i} is null — skipping`);
      }
    }

    const zipBlob = await zip.generateAsync({ type: "blob" });
    saveAs(zipBlob, "cards.zip");
  };

  const count = selected.filter(Boolean).length;

  return (
    <Button onClick={downloadAll} disabled={count === 0} className="relative">
      Download
      {count > 0 && (
        <span className="ml-2 inline-flex items-center justify-center text-xs font-medium bg-white text-black rounded-full px-2">
          {count}
        </span>
      )}
    </Button>
  );
};
