import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "About Us — ScamAI",
  description: "Learn more about ScamAI.",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden rounded-2xl grid place-items-center mb-6">
        <div className="relative z-10 text-center p-8 md:p-12 lg:p-14">
          <h1 className="text-[clamp(28px,6vw,56px)] font-semibold tracking-tight">About Us</h1>
          <p className="mt-4 text-white/80 max-w-3xl mx-auto">
            We build detection models that protect people and businesses from AI‑powered fraud.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}