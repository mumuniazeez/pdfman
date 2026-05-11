import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Header() {
  return (
    <header className="mx-[150px] py-[20px] flex items-center justify-between border-b sticky top-0 z-10 bg-gray-950">
      <div className="flex items-center gap-x-3">
        <div className="bg-primary px-3 py-2 shadow-lg shadow-primary/50">
          <p className="capitalize font-medium font-mono text-xl">p</p>
        </div>
        <h1 className="font-medium font-mono text-xl">PDFman</h1>
      </div>

      <div className="flex gap-x-3">
        <Button variant={"link"} className="font-bold! ">
          Docs
        </Button>
        <Separator orientation="vertical" />
        <Button variant={"outline"} className="font-bold! ">
          Star on Github
        </Button>
      </div>
    </header>
  );
}
