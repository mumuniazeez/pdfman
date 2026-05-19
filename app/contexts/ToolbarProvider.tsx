import {
  Cursor,
  Highlighter,
  Pen02Icon,
  Text,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import React, { createContext, useContext, useState } from "react";

type ToolName = "SELECT" | "TEXT" | "SIGNATURE";

type Tool = {
  name: ToolName;
  icon: IconSvgElement;
};

export interface ToolbarContext {
  currentTool: Tool;
  setCurrentTool: (tool: Tool) => void;
  tools: Tool[];
}

const ToolbarContext = createContext<ToolbarContext | undefined>(undefined);

export const useToolbarContext = () => {
  const context = useContext(ToolbarContext);
  if (!context) throw new Error("useToolbarContext not in ToolbarContext");

  return context;
};

export default function ToolbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const tools: ToolbarContext["tools"] = [
    {
      name: "SELECT",
      icon: Cursor,
    },
    {
      name: "TEXT",
      icon: Text,
    },
    // {
    //   name: "HIGHLIGHT",
    //   icon: Highlighter,
    // },
    {
      name: "SIGNATURE",
      icon: Pen02Icon,
    },
  ];
  const [currentTool, setCurrentTool] = useState<ToolbarContext["currentTool"]>(
    tools[0],
  );

  return (
    <ToolbarContext.Provider value={{ currentTool, setCurrentTool, tools }}>
      {children}
    </ToolbarContext.Provider>
  );
}
