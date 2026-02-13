export default function EmptyPage({ title }: { title?: string }) {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-white">
      <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6">
        {title && (
          <h1 className="text-2xl font-semibold text-white sm:text-3xl">
            {title}
          </h1>
        )}
      </section>
    </main>
  );
}
