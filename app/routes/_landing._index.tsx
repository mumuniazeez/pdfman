import Header from "~/components/Header";
import type { Route } from "./+types/_landing._index";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Upload } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      <Header />
      <main className="mx-[150px] py-[20px] space-y-20 mt-20">
        {/* Hero Section */}
        <section className="text-center space-y-6">
          <Badge>Open Source PDF Editor</Badge>

          <h1 className="text-7xl font-mono">
            Edit PDF for free <br />
            <span className="text-primary">No secret. No servers</span>
          </h1>

          <p className="text-zinc-400">
            A 100% client-side editor built for developers who care about
            privacy. <br /> Your files never leaves your browser threads.
          </p>
        </section>
        {/* Drop/upload file section */}
        <section className="flex items-center justify-center">
          <div className="bg-accent border border-zinc-700 w-150">
            <div><HugeiconsIcon icon={Upload} /></div>
          </div>
        </section>
      </main>
    </div>
  );
}
