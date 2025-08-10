import SiteShell from "@/components/SiteShell";

export const metadata = {
  title: "People — ScaMai",
  description: "Meet the people behind ScaMai.",
};

export default function PeoplePage() {
  const secondaryLinks: string[] = [];

  return (
    <SiteShell secondaryLinks={secondaryLinks}>
      <section className="bg-white/5 p-8 md:p-12 lg:p-16 backdrop-blur-sm">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white text-center">
          Our People
        </h1>
        <p className="mt-3 text-center text-white/80 max-w-2xl mx-auto">
          We&apos;re a small, focused team building AI safety tools for
          everyone.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((i) => (
            <article key={i} className="bg-white/5 p-6">
              <div className="h-24 w-24 rounded-full bg-white/10 mx-auto" />
              <h3 className="mt-4 text-lg font-semibold text-center">
                Person {i}
              </h3>
              <p className="mt-1 text-sm text-white/70 text-center">Role</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
