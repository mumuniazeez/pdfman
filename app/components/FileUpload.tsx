import { Upload } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FileUploader } from "react-drag-drop-files";
import { usePDFFileContext } from "~/contexts/PDFFilePRovider";

export default function FileUpload() {
  const { handleUpload } = usePDFFileContext();

  return (
    <FileUploader handleChange={handleUpload} types={["pdf"]} maxSize={50}>
      <div className="bg-accent border border-border w-150 flex items-center justify-center flex-col gap-y-5 py-20">
        <div className="p-3 bg-background w-fit text-primary">
          <HugeiconsIcon icon={Upload} size={34} />
        </div>
        <p className="font-bold">Drop PDF or Browse Device</p>
        <div className="flex items-center gap-x-2 text-sm">
          <p className=" text-zinc-400">MAX 50MB</p>
          <Separator orientation="vertical" />
          <Button variant={"link"} className="hover:no-underline font-bold">
            USE SAMPLE
          </Button>
        </div>
      </div>
    </FileUploader>
  );
}
