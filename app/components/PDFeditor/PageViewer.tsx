import { useAnnotationContext } from "~/contexts/AnnotationProvider";
import { usePDFFileContext } from "~/contexts/PDFFilePRovider";
import { useToolbarContext } from "~/contexts/ToolbarProvider";

export default function PageViewer() {
  const { currentTool } = useToolbarContext();
  const { canvasRef } = usePDFFileContext();
  const { annotations } = useAnnotationContext();
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
        {annotations.map((ann, idx) => {
          switch (ann.type) {
            case "text":
              return (
                <div
                  className={`relative  text-black border border-dashed`}
                  style={{
                    top: `${ann.y}px`,
                    left: `${ann.x}px`,
                  }}
                >
                  <textarea
                    className="w-full h-full resize-none border-none outline-none bg-transparent p-1"
                    value={ann.content}
                  />
                </div>
              );
            case "signature":
              return (
                <div
                  className={`relative`}
                  style={{
                    top: `${ann.y}px`,
                    left: `${ann.x}px`,
                  }}
                >
                  <img
                    src={ann.imageSrc}
                    alt={ann.type}
                    width={ann.width}
                    height={ann.height}
                  />
                </div>
              );
            default:
              return <p>Nothing Here haha</p>;
          }
        })}
      </div>
    </div>
  );
}
