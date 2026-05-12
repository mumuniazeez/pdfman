import React from "react";
import EditorHeader from "~/components/PDFeditor/EditorHeader";
import PagesViewerSidebar from "~/components/PDFeditor/PagesViewerSidebar";

export default function EditorPage() {
  return (
    <div className="h-screen overflow-hiden flex flex-col">
      <EditorHeader />
      <div className="flex overflow-hidden">
        <PagesViewerSidebar />
      </div>
      <div className="border-border border-2 flex items-center justify-between py-1 px-2">
        <div>
          <p>PDF Editor</p>
        </div>
        <div>
          <p>Open Source | MIT LICENSE</p>
        </div>
      </div>
    </div>
  );
}
