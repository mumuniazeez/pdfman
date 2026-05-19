import type { PDFDocumentProxy } from "pdfjs-dist";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router";

type PDFFile = File;

export interface PDFFileContext {
  file: PDFFile | null;
  pdfDocument: PDFDocumentProxy | null;
  setPdfDocument: (pdf: PDFDocumentProxy) => void;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPage: number;
  setTotalPage: (page: number) => void;
  canvasRef: React.RefObject<HTMLCanvasElement | null> | null;
  fileBlobUrl: string;
  setFileBlobUrl: (url: string) => void;
  handleUpload: (file: PDFFile) => void;
  loadPDF: (url: string) => Promise<PDFDocumentProxy>;
  loadPage: (
    pageNumber: number,
    pdfDocument: PDFDocumentProxy,
  ) => Promise<void>;
}

const PDFFileContext = createContext<PDFFileContext | undefined>(undefined);

export const usePDFFileContext = () => {
  const context = useContext(PDFFileContext);
  if (!context) throw new Error("usePDFFileContext not in PDFFileContext");

  return context;
};

export default function PDFFilePRovider({
  children,
}: {
  children: React.ReactNode;
}) {
  const navigate = useNavigate();
  const [pdfDocument, setPdfDocument] =
    useState<PDFFileContext["pdfDocument"]>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fileBlobUrl, setFileBlobUrl] =
    useState<PDFFileContext["fileBlobUrl"]>("");
  const [file, setFile] = useState<PDFFileContext["file"]>(null);

  const handleUpload = (file: PDFFile) => {
    console.log(file);
    const url = getBlob(file);
    if (!url) return alert("Error uploading file");
    setFile(file);
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
    const pdfJsLibrary = await import("pdfjs-dist");
    pdfJsLibrary.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfJsLibrary.version}/build/pdf.worker.min.mjs`;
    const pdf = await pdfJsLibrary.getDocument({
      url,
    }).promise;

    return pdf;
  };

  const loadPage = async (
    pageNumber: number,
    pdfDocument: PDFDocumentProxy,
  ) => {
    if (!canvasRef.current) return;

    const page = await pdfDocument.getPage(pageNumber);

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
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    console.log("haha", fileBlobUrl);
  }, [fileBlobUrl]);

  return (
    <PDFFileContext.Provider
      value={{
        file,
        pdfDocument,
        setPdfDocument,
        currentPage,
        setCurrentPage,
        totalPage,
        setTotalPage,
        canvasRef,
        fileBlobUrl,
        handleUpload,
        setFileBlobUrl,
        loadPDF,
        loadPage,
      }}
    >
      {children}
    </PDFFileContext.Provider>
  );
}
