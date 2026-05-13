import {
  Bold,
  Cursor,
  Italic,
  TextStrikethroughFreeIcons,
  Underline,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import React from "react";
import { Separator } from "../ui/separator";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useToolbarContext } from "~/contexts/ToolbarProvider";

export default function ToolPanelSidebar() {
  const { currentTool } = useToolbarContext();
  return (
    <div className="w-full h-full overflow-y-auto flex flex-col">
      <div className="bg-accent/60 border-2 border-border flex items-center gap-x-2 gap-y-2 p-3 sticky top-0">
        <HugeiconsIcon icon={currentTool.icon} />
        <p className="text-zinc-400 font-medium">{currentTool.name} SETTINGS</p>
      </div>
      <div className="bg-accent/50 border-2 border-border w-full flex-1  py-7 px-6">
        {/* Selection Mode Settings */}
        <div
          className={`space-y-6 ${currentTool.name !== "SELECT" && "hidden"}`}
        >
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">SELECTION</p>
            <p className="text-zinc-400 font-medium text-sm">
              Select elements to modify their properties or reposition them on
              the canvas.
            </p>
          </div>
          <Separator />
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">
              Document Metadata
            </p>

            <div className="bg-muted border-border border px-3 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-400">PDF STANDARD</p>
                <p>1.7 (ISO 32939)</p>
              </div>
            </div>
            <div className="bg-muted border-border border px-3 py-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-400">SECURITY</p>
                <p>Unprotected</p>
              </div>
            </div>
          </div>
        </div>
        {/* Text Mode Settings */}
        <div className={`space-y-6 ${currentTool.name !== "TEXT" && "hidden"}`}>
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">FONT FAMILY</p>

            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a Font" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="times-new-roman">Times New Roman</SelectItem>
                <SelectItem value="helvetica">Helvetica</SelectItem>
                <SelectItem value="courier-new">Courier New</SelectItem>
                <SelectItem value="arial">Arial</SelectItem>
                <SelectItem value="verdana">Verdana</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">
              TYPOGRAPHY SETTINGS
            </p>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-medium text-zinc-400">
                  FONT SIZE
                </p>
                <p className="text-xs font-bold text-primary">12pt</p>
              </div>
              <Input
                type="range"
                min={1}
                max={200}
                step={1}
                className="accent-primary"
              />

              <div className="flex items-center justify-between">
                <Button variant={"outline"} size={"icon-lg"}>
                  <HugeiconsIcon icon={Bold} />
                </Button>
                <Button variant={"outline"} size={"icon-lg"}>
                  <HugeiconsIcon icon={Italic} />
                </Button>
                <Button variant={"outline"} size={"icon-lg"}>
                  <HugeiconsIcon icon={Underline} />
                </Button>
                <Button variant={"outline"} size={"icon-lg"}>
                  <HugeiconsIcon icon={TextStrikethroughFreeIcons} />
                </Button>
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">COLOR PALETTE</p>

            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Button
                  key={item}
                  variant={item === 1 ? "secondary" : "outline"}
                  size={"icon-lg"}
                  className={`w-full h-12 ${item === 1 ? "border-primary border" : ""}`}
                ></Button>
              ))}
            </div>
          </div>
        </div>
        {/* Highlight Mode Settings */}
        <div
          className={`space-y-6 ${currentTool.name !== "HIGHLIGHT" && "hidden"}`}
        >
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">COLOR PALETTE</p>

            <div className="grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                <Button
                  key={item}
                  variant={item === 1 ? "secondary" : "outline"}
                  size={"icon-lg"}
                  className={`w-full h-12 ${item === 1 ? "border-primary border" : ""}`}
                ></Button>
              ))}
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-zinc-400 font-medium text-xs">OPACITY</p>

            <Input type="range" className="accent-primary" />
          </div>
        </div>
        {/* Signature Mode Settings */}
        <div
          className={`space-y-6 ${currentTool.name !== "SIGNATURE" && "hidden"}`}
        >
          <div className="space-y-2">
            <Button variant={"outline"} size={"lg"} className="w-full">
              Place Signature
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
