import {
  Cursor,
  Highlighter,
  Pen02Icon,
  Text,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";
import { useToolbarContext } from "~/contexts/ToolbarProvider";

export default function ToolBar() {
  const { tools, currentTool, setCurrentTool } = useToolbarContext();
  return (
    <div className="bg-zinc-900 border flex items-center justify-between gap-x-3 px-0.5 py-0.5">
      {tools.map((tool, i) => {
        const isActive = tool.name === currentTool.name;
        return (
          <Button
            onClick={() => setCurrentTool(tool)}
            variant={isActive ? "default" : "ghost"}
            key={i}
            className={`flex-col h-fit w-fit p-2 ${
              isActive ? "text-white" : "text-zinc-400"
            }`}
          >
            <HugeiconsIcon icon={tool.icon} />
            <span className="text-xs font-medium">{tool.name}</span>
          </Button>
        );
      })}
    </div>
  );
}
