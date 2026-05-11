import { Link } from "react-router";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="px-[150px] py-[20px] mt-10 bg-accent flex items-center justify-between">
      <div className="space-y-2">
        <div className="flex items-center gap-x-3">
          <div className="bg-primary px-3 py-2 shadow-lg shadow-primary/50">
            <p className="capitalize font-medium font-mono text-xl">p</p>
          </div>
          <h1 className="font-medium font-mono text-xl">PDFman</h1>
        </div>
        <p className="text-sm text-zinc-400">
          Build with {"<3"} by
          <Link to={"https://github.com/mumuniazeez"}>
            <Button variant={"link"} className="font-bold! text-sm">
              AzCodes
            </Button>
          </Link>
        </p>
      </div>
      <div>
        <p className="text-zinc-400 font-bold text-sm mb-3">LEGAL</p>

        <div className="flex flex-col text-zinc-400 ">
          <Link className="hover:underline" to={"#"}>
            MIT_LICENSE
          </Link>
          <Link className="hover:underline" to={"#"}>
            PRIVACY_POLICY
          </Link>
        </div>
      </div>
      <div className="capitalize">
        <p className="text-zinc-400">PROUDLY LOCAL.</p>
        <p className="text-zinc-400">NO COOKIES. NO TRACKING.</p>
        <p className="text-zinc-400">
          &copy; {new Date().getFullYear()} PDFman Contributors
        </p>
      </div>
    </footer>
  );
}
