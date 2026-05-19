import Header from "~/components/Header";
import type { Route } from "./+types/_pdf._landing._index";
import { Badge } from "~/components/ui/badge";
import { Cursor, ShieldCheck, Text, Upload } from "@hugeicons/core-free-icons";
import type { Feature } from "~/components/FeatureCard";
import FeatureCard from "~/components/FeatureCard";
import Footer from "~/components/Footer";
import { lazy, Suspense } from "react";
const FileUpload = lazy(() => import("~/components/FileUpload"));

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
          <Suspense
            fallback={
              <div className="w-150 h-[316px] bg-accent animate-pulse"></div>
            }
          >
            <FileUpload />
          </Suspense>
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
