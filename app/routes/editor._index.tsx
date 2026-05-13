import { ArrowLeft, ArrowRight } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import EditorHeader from "~/components/PDFeditor/EditorHeader";
import PageViewer from "~/components/PDFeditor/PageViewer";
import PagesViewerSidebar from "~/components/PDFeditor/PagesViewerSidebar";
import ToolPanelSidebar from "~/components/PDFeditor/ToolPanelSidebar";
import { Button } from "~/components/ui/button";
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
          <div className="w-full h-full overflow-y-auto flex flex-col items-center">
            <div className="w-[20%] bg-zinc-900 border-2 flex items-center gap-x-2 justify-between mt-10 sticky top-10 p-0.5">
              <Button variant={"ghost"} size={"icon-sm"}>
                <HugeiconsIcon icon={ArrowLeft} />
              </Button>
              <p className="font-medium text-xs">PAGE 1 OF 3</p>
              <Button variant={"ghost"} size={"icon-sm"}>
                <HugeiconsIcon icon={ArrowRight} />
              </Button>
            </div>
            <div className="flex flex-col items-center gap-y-15 pt-10 pb-30 px-20">
              <PageViewer />
              <PageViewer />
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
