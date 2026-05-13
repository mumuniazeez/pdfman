import React from "react";
import { usePDFFileContext } from "~/contexts/PDFFilePRovider";

export default function PageViewer() {
  const { canvasRef } = usePDFFileContext();
  return (
    <div>
      <canvas className="border border-border" ref={canvasRef}></canvas>
    </div>
  );
}
