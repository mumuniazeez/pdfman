import {
  Cursor,
  Highlighter,
  Pen02Icon,
  Text,
} from "@hugeicons/core-free-icons";
import type { IconSvgElement } from "@hugeicons/react";
import React, { createContext, useContext, useState } from "react";

type ToolName = "SELECT" | "TEXT" | "HIGHLIGHT" | "SIGN";

type Tool = {
  name: ToolName;
  icon: IconSvgElement;
};

export interface ToolbarContext {
  currentTool: ToolName;
  setCurrentTool: (toolName: ToolName) => void;
  tools: Tool[];
}

const ToolbarContext = createContext<ToolbarContext>({
  currentTool: "SELECT",
  tools: [],
  setCurrentTool: () => {},
});

export const useToolbarContext = useContext(ToolbarContext);

export default function ToolbarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentTool, setCurrentTool] =
    useState<ToolbarContext["currentTool"]>("SELECT");

  const tools: ToolbarContext["tools"] = [
    {
      name: "SELECT",
      icon: Cursor,
    },
    {
      name: "TEXT",
      icon: Text,
    },
    {
      name: "HIGHLIGHT",
      icon: Highlighter,
    },
    {
      name: "SIGN",
      icon: Pen02Icon,
    },
  ];
  return (
    <ToolbarContext.Provider value={{ currentTool, setCurrentTool, tools }}>
      {children}
    </ToolbarContext.Provider>
  );
}
