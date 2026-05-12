import React from "react";
import { Separator } from "../ui/separator";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Cursor,
  Download,
  Plus,
  Redo02FreeIcons,
  Undo02FreeIcons,
} from "@hugeicons/core-free-icons";
import { Button } from "../ui/button";

export default function EditorHeader() {
  return (
    <header className="px-2 py-3 border-border border-2">
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
        <div className="bg-zinc-900  flex items-center justify-between gap-x-3 px-0.5 py-0.5">
          <Button
            variant={"ghost"}
            className="flex-col h-fit w-fit p-2 text-zinc-400"
          >
            <HugeiconsIcon icon={Cursor} />
            <span className="text-sm font-medium">Select</span>
          </Button>
          <Button
            variant={"default"}
            className="flex-col h-fit w-fit p-2 text-white"
          >
            <HugeiconsIcon icon={Cursor} />
            <span className="text-sm font-medium">Select</span>
          </Button>
          <Button
            variant={"ghost"}
            className="flex-col h-fit w-fit p-2 text-zinc-400"
          >
            <HugeiconsIcon icon={Cursor} />
            <span className="text-sm font-medium">Select</span>
          </Button>
        </div>
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
