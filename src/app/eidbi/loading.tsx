export default function EidbiLoading() {
  return (
    <main className="w-full bg-white animate-pulse">
      {/* Hero skeleton */}
      <section className="relative border-b border-border-light bg-white">
        <div className="container-max py-10 md:py-12 lg:py-14">
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="h-6 w-48 rounded-full bg-gray-200" />
            <div className="h-12 w-full rounded-lg bg-gray-200" />
            <div className="h-12 w-4/5 rounded-lg bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-3/4 rounded bg-gray-100" />
            <div className="flex gap-4 pt-2">
              <div className="h-12 w-40 rounded-full bg-gray-200" />
              <div className="h-12 w-32 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-6 space-y-4">
              <div className="h-6 w-36 rounded-full bg-gray-200" />
              <div className="h-8 w-3/4 rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-2/3 rounded bg-gray-100" />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <div className="h-64 rounded-2xl bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Services grid skeleton */}
      <section className="py-16 md:py-20 bg-[#F7FBF9]">
        <div className="container-max">
          <div className="text-center mb-16 space-y-4">
            <div className="h-6 w-40 rounded-full bg-gray-200 mx-auto" />
            <div className="h-8 w-96 max-w-full rounded bg-gray-200 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="rounded-2xl bg-white border border-border-light overflow-hidden">
                <div className="h-20 bg-gray-100" />
                <div className="p-8 space-y-3">
                  <div className="h-5 w-3/4 rounded bg-gray-200" />
                  <div className="h-4 w-full rounded bg-gray-100" />
                  <div className="h-4 w-2/3 rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
