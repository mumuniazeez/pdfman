import React from "react";
import { Separator } from "../ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Download,
  Plus,
  Redo02FreeIcons,
  Undo02FreeIcons,
} from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";
import ToolBar from "./ToolBar";

export default function EditorHeader() {
  return (
    <header className="px-3 py-2 border-border border-2 bg-accent/60">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <div className="bg-primary px-3 py-2 shadow-lg shadow-primary/50">
              <p className="capitalize font-medium font-mono text-xl">p</p>
            </div>
            <h1 className="font-medium font-mono text-xl">PDFman</h1>
          </div>
          <Separator orientation="vertical" />
          <div>
            <h4 className="font-medium">PDF_File_Name.pdf</h4>
            <p className="text-sm text-zinc-400">3 pages</p>
          </div>
        </div>
        <ToolBar />
        <div className=" flex items-center justify-between gap-x-3">
          <Button variant={"ghost"} size={"icon"} className="text-zinc-400">
            <HugeiconsIcon icon={Undo02FreeIcons} />
          </Button>
          <Button variant={"ghost"} size={"icon"} className="text-zinc-400">
            <HugeiconsIcon icon={Redo02FreeIcons} />
          </Button>
          <Separator orientation="vertical" />
          <Button variant={"ghost"} className="text-zinc-400">
            <HugeiconsIcon icon={Plus} />
            <span>Merge</span>
          </Button>
          <Button variant={"default"} className="text-white">
            <HugeiconsIcon icon={Download} />
            <span>Download</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
