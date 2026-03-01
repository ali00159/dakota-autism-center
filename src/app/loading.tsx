export default function HomeLoading() {
  return (
    <main className="w-full overflow-hidden animate-pulse">
      {/* Hero skeleton */}
      <section className="relative border-b border-border-light bg-white">
        <div className="container-max py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl space-y-5">
            <div className="h-6 w-40 rounded-full bg-gray-200" />
            <div className="h-12 w-full rounded-lg bg-gray-200" />
            <div className="h-12 w-3/4 rounded-lg bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-2/3 rounded bg-gray-100" />
            <div className="flex gap-4 pt-4">
              <div className="h-12 w-44 rounded-full bg-gray-200" />
              <div className="h-12 w-36 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Content blocks skeleton */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="space-y-4">
                <div className="h-48 rounded-2xl bg-gray-100" />
                <div className="h-5 w-3/4 rounded bg-gray-200" />
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-2/3 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
