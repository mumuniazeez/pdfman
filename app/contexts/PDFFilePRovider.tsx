import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router";

type PDFFile = File | File[];

export interface PDFFileContext {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null> | null;
  fileBlobUrl: string;
  setFileBlobUrl: (url: string) => void;
  handleUpload: (file: PDFFile) => void;
  loadPDF: (url: string) => Promise<void>;
}

const PDFFileContext = createContext<PDFFileContext>({
  currentPage: 1,
  setCurrentPage: () => {},
  canvasRef: null,
  fileBlobUrl: "",
  setFileBlobUrl: () => {},
  handleUpload: () => {},
  loadPDF: () => Promise.resolve(),
});

export const usePDFFileContext = () => useContext(PDFFileContext);

// https://goodfoodstore.com/wp-content/uploads/2024/10/Rice.pdf

export default function PDFFilePRovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fileBlobUrl, setFileBlobUrl] =
    useState<PDFFileContext["fileBlobUrl"]>("");

  const handleUpload = (file: PDFFile) => {
    console.log(file);
    const url = getBlob(file);
    if (!url) return alert("Error uploading file");
    setFileBlobUrl(url);
    console.log(url);
    navigate("/editor");
  };

  const getBlob = (file: PDFFile) => {
    if (!file) return;
    if (Array.isArray(file)) return;
    return URL.createObjectURL(file);
  };

  const loadPDF = async (url: string) => {
    if (!canvasRef.current) return;

    const pdfJsLibrary = await import("pdfjs-dist");
    pdfJsLibrary.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfJsLibrary.version}/build/pdf.worker.min.mjs`;
    const pdf = await pdfJsLibrary.getDocument({
      url,
    }).promise;

    const page = await pdf.getPage(currentPage);

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
    console.log("haha", fileBlobUrl);
  }, [fileBlobUrl]);

  return (
    <PDFFileContext.Provider
      value={{
        currentPage,
        setCurrentPage,
        canvasRef,
        fileBlobUrl,
        handleUpload,
        setFileBlobUrl,
        loadPDF,
      }}
    >
      {children}
    </PDFFileContext.Provider>
  );
}
