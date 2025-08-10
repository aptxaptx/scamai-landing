import SiteShell from "@/components/SiteShell";
import DemoForm from "./DemoForm";

export const metadata = {
  title: "Schedule a Demo — ScamAI",
  description: "Request a demo of ScamAI's detection platform.",
};

export default function DemoPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        <div className="relative z-10 w-full max-w-3xl mx-auto p-8 md:p-12 lg:p-14">
          <div className="text-center">
            <h1 className="text-[clamp(28px,6.5vw,56px)] font-semibold tracking-tight">Schedule a demo</h1>
            <p className="mt-3 text-white/80 max-w-2xl mx-auto">
              First call: <strong>15 minutes</strong> to understand your needs.<br />
              Follow‑up: <strong>30 minutes</strong> live demo tailored to your workflows.
            </p>
          </div>

          <DemoForm />
        </div>
      </section>
    </SiteShell>
  );
}