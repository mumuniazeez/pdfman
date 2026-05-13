import {
  Cursor,
  Highlighter,
  Pen02Icon,
  Text,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "../ui/button";

export default function ToolBar() {
  return (
    <div className="bg-zinc-900 border flex items-center justify-between gap-x-3 px-0.5 py-0.5">
      <Button
        variant={"ghost"}
        className="flex-col h-fit w-fit p-2 text-zinc-400"
      >
        <HugeiconsIcon icon={Cursor} />
        <span className="text-xs font-medium">SELECT</span>
      </Button>
      <Button
        variant={"default"}
        className="flex-col h-fit w-fit p-2 text-white"
      >
        <HugeiconsIcon icon={Text} />
        <span className="text-xs font-medium">TEXT</span>
      </Button>
      <Button
        variant={"ghost"}
        className="flex-col h-fit w-fit p-2 text-zinc-400"
      >
        <HugeiconsIcon icon={Highlighter} />
        <span className="text-xs font-medium">HIGHLIGHT</span>
      </Button>
      <Button
        variant={"ghost"}
        className="flex-col h-fit w-fit p-2 text-zinc-400"
      >
        <HugeiconsIcon icon={Pen02Icon} />
        <span className="text-xs font-medium">SIGN</span>
      </Button>
    </div>
  );
}
