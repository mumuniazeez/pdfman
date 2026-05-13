import React from "react";
import EditorHeader from "~/components/PDFeditor/EditorHeader";
import PagesViewerSidebar from "~/components/PDFeditor/PagesViewerSidebar";
import ToolPanelSidebar from "~/components/PDFeditor/ToolPanelSidebar";
export default function EditorPage() {
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
          <div className="w-full">
            <h1>Hello Page shower</h1>
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
