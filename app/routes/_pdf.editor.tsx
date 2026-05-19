import React, { useEffect } from "react";
import { Outlet } from "react-router";
import AnnotationProvider from "~/contexts/AnnotationProvider";
import ToolbarProvider from "~/contexts/ToolbarProvider";

export default function editor() {
  useEffect(() => {
    window.addEventListener("beforeunload", (e) => {});
  }, []);

  return (
    <AnnotationProvider>
      <ToolbarProvider>
        <Outlet />
      </ToolbarProvider>
    </AnnotationProvider>
  );
}
