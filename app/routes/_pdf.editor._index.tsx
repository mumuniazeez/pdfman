import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import ClientOnlyComponent from "~/components/ClientOnlyComponent";
import EditorHeader from "~/components/PDFeditor/EditorHeader";
import PageViewer from "~/components/PDFeditor/PageViewer";
import PagesViewerSidebar from "~/components/PDFeditor/PagesViewerSidebar";
import ToolPanelSidebar from "~/components/PDFeditor/ToolPanelSidebar";
import { Button } from "~/components/ui/button";
import PDFFilePRovider, { usePDFFileContext } from "~/contexts/PDFFilePRovider";
export default function EditorPage() {
  const {
    fileBlobUrl,
    loadPDF,
    currentPage,
    loadPage,
    pdfDocument,
    totalPage,
    setTotalPage,
    setPdfDocument,
  } = usePDFFileContext();

  const navigate = useNavigate();

  useEffect(() => {
    if (!fileBlobUrl) {
      navigate("/");
      return;
    }
    const loadDocument = async () => {
      const pdf = await loadPDF(fileBlobUrl);
      setPdfDocument(pdf);
      setTotalPage(pdf.numPages);
      loadPage(currentPage, pdf!);
    };
    loadDocument();
  }, [fileBlobUrl]);

  const goToPrevPage = async () => {
    if (currentPage === 1) return;
    await loadPage(currentPage - 1, pdfDocument!);
  };
  const goToNextPage = async () => {
    if (currentPage === totalPage) return;
    await loadPage(currentPage + 1, pdfDocument!);
  };

  return (
    <div className="h-screen overflow-hidden flex flex-col">
      {/* Header */}
      <EditorHeader />

      {/* MAin */}
      <div className="flex justify-between flex-1 h-full w-screen">
        <div className="overflow-hidden w-[20%]">
          <PagesViewerSidebar />
        </div>

        <div className="overflow-hidden w-[60%]">
          <div className="w-full h-full overflow-y-auto flex flex-col items-center">
            <div className="w-[20%] bg-zinc-900 border-2 flex items-center gap-x-2 justify-between mt-10 sticky top-10 p-0.5">
              <Button
                variant={"ghost"}
                size={"icon-sm"}
                onClick={goToPrevPage}
                disabled={currentPage === 1}
              >
                <HugeiconsIcon icon={ArrowLeft} />
              </Button>
              <p className="font-medium text-xs">
                PAGE {currentPage} OF {totalPage}
              </p>
              <Button
                variant={"ghost"}
                size={"icon-sm"}
                onClick={goToNextPage}
                disabled={currentPage === totalPage}
              >
                <HugeiconsIcon icon={ArrowRight} />
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-15 pt-5 pb-30 px-20">
              <PageViewer />
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-[20%]">
          <ToolPanelSidebar />
        </div>
      </div>

      {/* Footer */}
      <div className="border-border border-2 flex items-center justify-between py-1 px-2 text-sm">
        <div className="flex items-center gap-x-2">
          <div className="flex items-center gap-x-2">
            <div className="w-3 h-3 bg-primary animate-pulse"></div>
            <p className="text-primary">READY</p>
          </div>

          <p className="text-zinc-400">PDF v1.7</p>
          <p className="text-zinc-400">117kb</p>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-zinc-400">v1.0.5</p>
          <p>MIT LICENSE</p>
        </div>
      </div>
    </div>
  );
}
