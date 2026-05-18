import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import PageCard from "./PageCard";
import { usePDFFileContext } from "~/contexts/PDFFilePRovider";

export default function PagesViewerSidebar() {
  const { pdfDocument, totalPage } = usePDFFileContext();
  const [thumbnails, setThumbnails] = useState<string[]>([]);
  const renderLock = useRef(false);

  useEffect(() => {
    if (!pdfDocument || renderLock.current) return;

    const generateThumbnails = async () => {
      renderLock.current = true;

      try {
        const newThumbnails = [];

        for (let i = 1; i <= pdfDocument.numPages; i++) {
          const page = await pdfDocument.getPage(i);
          const viewport = page.getViewport({ scale: 0.3 });

          const canvas = window.document.createElement("canvas");

          const ctx = canvas.getContext("2d");

          if (ctx) {
            canvas.height = viewport.height;
            canvas.width = viewport.width;

            await page.render({ canvasContext: ctx, viewport, canvas }).promise;
            newThumbnails.push(canvas.toDataURL());
          }
        }
        setThumbnails(newThumbnails);
      } catch (error) {
        console.error("Thumbnail generation error:", error);
      } finally {
        renderLock.current = false;
      }
    };

    generateThumbnails();
  }, [pdfDocument]);

  return (
    <div className="w-full h-full overflow-y-auto flex flex-col">
      <div className="bg-accent border-2 border-border flex items-center justify-between p-2 sticky top-0">
        <p className="text-zinc-400 text-xs">Page ({totalPage})</p>
        <Button variant={"ghost"} className="text-primary font-medium">
          + Add
        </Button>
      </div>
      <div className="bg-accent/50 border-2 border-border w-full flex-1 flex flex-col items-center py-3 gap-y-3 pb-30">
        {thumbnails.map((imageSrc, idx) => (
          <PageCard key={idx} imageSrc={imageSrc} pageNumber={idx + 1} />
        ))}
      </div>
    </div>
  );
}
