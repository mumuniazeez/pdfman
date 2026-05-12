import React from "react";

export default function PageCard() {
  return (
    <div className="text-center space-y-3">
      <img
        src="/pdf_screenshot.png"
        alt="Image of Page (1)"
        width={200}
        height={300}
        className="border-primary border-2 shadow-md shadow-primary"
      />
      <p className="text-primary text-sm font-medium">PAGE 1</p>
    </div>
  );
}
