export default function InHomeAbaLoading() {
  return (
    <main className="w-full bg-white animate-pulse">
      {/* Hero skeleton */}
      <section className="relative border-b border-border-light bg-white">
        <div className="container-max py-10 md:py-12 lg:py-14">
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="h-6 w-44 rounded-full bg-gray-200" />
            <div className="h-12 w-full rounded-lg bg-gray-200" />
            <div className="h-12 w-3/5 rounded-lg bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-4/5 rounded bg-gray-100" />
            <div className="flex gap-4 pt-2">
              <div className="h-12 w-48 rounded-full bg-gray-200" />
              <div className="h-12 w-36 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar skeleton */}
      <section className="bg-primary/10 py-6 md:py-8">
        <div className="container-max">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-gray-200" />
                <div className="space-y-2 flex-1">
                  <div className="h-4 w-24 rounded bg-gray-200" />
                  <div className="h-3 w-full rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
            <div className="lg:col-span-5">
              <div className="aspect-[4/5] rounded-3xl bg-gray-100" />
            </div>
            <div className="lg:col-span-7 space-y-4">
              <div className="h-6 w-40 rounded-full bg-gray-200" />
              <div className="h-8 w-full rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-3/4 rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes skeleton */}
      <section className="py-16 md:py-20 bg-[#F7FBF9]">
        <div className="container-max">
          <div className="text-center mb-16 space-y-4">
            <div className="h-6 w-32 rounded-full bg-gray-200 mx-auto" />
            <div className="h-10 w-96 max-w-full rounded bg-gray-200 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-2xl bg-white border border-border-light p-8 space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gray-100" />
                  <div className="space-y-2 flex-1">
                    <div className="h-5 w-28 rounded bg-gray-200" />
                    <div className="h-6 w-16 rounded bg-gray-100" />
                  </div>
                </div>
                <div className="h-4 w-full rounded bg-gray-100" />
                <div className="h-4 w-3/4 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
