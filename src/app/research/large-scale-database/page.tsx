export const metadata = {
  title: "Large Scale Database Research — ScaMai",
  description: "Scalable database systems for storing and querying detection results.",
};

import SiteShell from "@/components/SiteShell";

export default function LargeScaleDatabasePage() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden rounded-2xl backdrop-blur-sm grid place-items-center">
        <div className="relative z-10 text-center p-10 md:p-16 lg:p-20">
          <h1 className="text-[clamp(32px,7vw,64px)] font-bold tracking-tight">
            Large Scale Database Research
          </h1>
          <p className="mt-4 text-white/85 text-[clamp(15px,2.2vw,20px)] max-w-3xl mx-auto">
            Scalable database systems for storing and querying detection results.
          </p>
        </div>
      </section>
    </SiteShell>
  );
}
