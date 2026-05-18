import React from "react";
import { Outlet } from "react-router";
import ToolbarProvider from "~/contexts/ToolbarProvider";

export default function editor() {
  return (
    <ToolbarProvider>
      <Outlet />
    </ToolbarProvider>
  );
}
