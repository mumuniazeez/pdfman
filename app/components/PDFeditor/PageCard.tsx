import React from "react";
import { usePDFFileContext } from "~/contexts/PDFFilePRovider";

export default function PageCard({
  imageSrc,
  pageNumber,
}: {
  imageSrc: string;
  pageNumber: number;
}) {
  const { currentPage, loadPage, pdfDocument } = usePDFFileContext();
  return (
    <div
      className="text-center space-y-3"
      onClick={() => loadPage(pageNumber, pdfDocument!)}
    >
      <img
        src={imageSrc}
        alt={`Page (${pageNumber})`}
        width={200}
        height={300}
        className={`${currentPage === pageNumber && "border-primary border-2 shadow-md shadow-primary"}`}
      />
      <p className="text-primary text-sm font-medium">PAGE {pageNumber}</p>
    </div>
  );
}
