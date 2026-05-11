import Header from "~/components/Header";
import type { Route } from "./+types/_landing._index";
import { Badge } from "~/components/ui/badge";
import { Button } from "~/components/ui/button";
import { Cursor, ShieldCheck, Text, Upload } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Separator } from "~/components/ui/separator";
import type { Feature } from "~/components/FeatureCard";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export function loader(): Feature[] {
  return [
    {
      title: "Surgical Split",
      description: "Extract ranges or separate pages with zero metadata loss",
      icon: Text,
    },
    {
      title: "Local Layers",
      description: "Annotate with text and drawings using client-safe fonts",
      icon: Text,
    },
    {
      title: "DND Reorder",
      description: "Visual page manipulation and instantaneous preview",
      icon: Cursor,
    },
    {
      title: "Total Privacy",
      description: "No analytics. No backend. No cloud leakage. Ever",
      icon: ShieldCheck,
    },
  ];
}

export default function Home({ loaderData: features }: Route.ComponentProps) {
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
          <div className="bg-accent border border-border w-150 flex items-center justify-center flex-col gap-y-5 py-20">
            <div className="p-3 bg-background w-fit text-primary">
              <HugeiconsIcon icon={Upload} size={34} />
            </div>
            <p className="font-bold">Drop PDF or Browse Device</p>
            <div className="flex items-center gap-x-2 text-sm">
              <p className=" text-zinc-400">MAX 50MB</p>
              <Separator orientation="vertical" />
              <Button variant={"link"} className="hover:no-underline font-bold">
                USE SAMPLE
              </Button>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="space-y-10">
          <h2 className="text-3xl font- text-center">Everything you need</h2>

          <div className="my-20 grid grid-col-1 md:grid-cols-4 items-center justify-center gap-5">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} feature={feature} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
