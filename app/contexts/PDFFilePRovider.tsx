import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

export interface PDFFileContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null> | null;
}

const PDFFileContext = createContext<PDFFileContext>({
  currentPage: 1,
  setCurrentPage: () => {},
  canvasRef: null,
});

export const usePDFFileContext = () => useContext(PDFFileContext);

// https://goodfoodstore.com/wp-content/uploads/2024/10/Rice.pdf

export default function PDFFilePRovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const loadPDF = async () => {
    if (!canvasRef.current) return;

    const { getDocument } = await import("pdfjs-dist");
    const pdf = await getDocument({
      url: "https://goodfoodstore.com/wp-content/uploads/2024/10/Rice.pdf",
    }).promise;

    const page = await pdf.getPage(1);

    const outputScale = window.devicePixelRatio || 1;

    const viewport = page.getViewport({ scale: 1.0 });

    const canvas = canvasRef.current;
    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = Math.floor(viewport.width) + "px";
    canvas.style.height = Math.floor(viewport.height) + "px";

    const transform =
      outputScale !== 1 ? [outputScale, 0, 0, outputScale, 0, 0] : null;

    const ctx = canvas.getContext("2d");

    await page.render({
      canvasContext: ctx!,
      viewport: viewport,
      transform: transform!,
      canvas,
    }).promise;
  };

  useEffect(() => {
    if (!canvasRef.current) return;

    loadPDF();
  }, [currentPage]);

  return (
    <PDFFileContext.Provider value={{ currentPage, setCurrentPage, canvasRef }}>
      {children}
    </PDFFileContext.Provider>
  );
}
