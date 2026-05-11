import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";

export type Feature = {
  title: string;
  description: string;
  icon: IconSvgElement;
};

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="bg-accent border border-border p-8 shadow-sm shadow-primary/50 group space-y-2 hover:-translate-y-2 duration-150">
      <div className="p-3 bg-background w-fit text-primary">
        <HugeiconsIcon icon={feature.icon} />
      </div>
      <h3 className="font-mono text-md">
        {feature.title}
      </h3>
      <p className="text-zinc-400 text-sm font-mono">{feature.description}</p>
    </div>
  );
}

export default FeatureCard;
