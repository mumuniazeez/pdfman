import PDFFilePRovider from "~/contexts/PDFFilePRovider";
import { Outlet } from "react-router";

export default function PDFLayout() {
  return (
    <PDFFilePRovider>
      <Outlet />
    </PDFFilePRovider>
  );
}
