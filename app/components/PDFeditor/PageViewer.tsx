import React from "react";
import { usePDFFileContext } from "~/contexts/PDFFilePRovider";
import { useToolbarContext } from "~/contexts/ToolbarProvider";

export default function PageViewer() {
  const { currentTool } = useToolbarContext();
  const { canvasRef } = usePDFFileContext();
  return (
    <div className="relative">
      {/* PDF Display Canvas */}
      <canvas className="border border-border" ref={canvasRef}></canvas>
      {/* Overlay to display annotations(Text/Signature/Image) */}
      <div
        className="absolute top-0 left-0  "
        style={{
          width: canvasRef?.current?.style.width || "100%",
          height: canvasRef?.current?.style.height || "100%",
          cursor:
            currentTool.name === "TEXT"
              ? "text"
              : currentTool.name === "SIGNATURE"
                ? "cell"
                : "default",
        }}
      >
        {/* Overlay item */}
        {/* <div className="relative top-30 left-10 bg-red-500 w-50 h-50 cursor-move"></div> */}
      </div>
    </div>
  );
}
