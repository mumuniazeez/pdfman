import React from "react";
import { Button } from "../ui/button";
import PageCard from "./PageCard";

export default function PagesViewerSidebar() {
  return (
    <div className="w-[20%] h-full overflow-y-scroll">
      <div className="bg-accent border-2 border-border flex items-center justify-between p-2 sticky top-0">
        <p className="text-zinc-400 text-xs">Page (3)</p>
        <Button variant={"ghost"} className="text-primary font-medium">
          + Add
        </Button>
      </div>
      <div className="bg-accent/50 border-2 border-border w-full flex flex-col items-center py-3 gap-y-3">
        <PageCard />
        <PageCard />
        <PageCard />
      </div>
    </div>
  );
}
