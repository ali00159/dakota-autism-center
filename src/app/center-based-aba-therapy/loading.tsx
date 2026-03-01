export default function CenterBasedLoading() {
  return (
    <main className="w-full bg-white animate-pulse">
      {/* Hero skeleton */}
      <section className="relative border-b border-border-light bg-white">
        <div className="container-max py-10 md:py-12 lg:py-14">
          <div className="w-full lg:w-1/2 space-y-5">
            <div className="h-6 w-52 rounded-full bg-gray-200" />
            <div className="h-12 w-full rounded-lg bg-gray-200" />
            <div className="h-12 w-4/5 rounded-lg bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-3/4 rounded bg-gray-100" />
            <div className="flex gap-4 pt-2">
              <div className="h-12 w-36 rounded-full bg-gray-200" />
              <div className="h-12 w-44 rounded-full bg-gray-100" />
            </div>
          </div>
        </div>
      </section>

      {/* Highlights skeleton */}
      <section className="py-16 md:py-20 bg-[#F7FBF9]">
        <div className="container-max">
          <div className="text-center mb-16 space-y-4">
            <div className="h-6 w-44 rounded-full bg-gray-200 mx-auto" />
            <div className="h-10 w-[28rem] max-w-full rounded bg-gray-200 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="flex gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gray-200 shrink-0" />
                <div className="space-y-3 flex-1">
                  <div className="h-5 w-3/4 rounded bg-gray-200" />
                  <div className="h-4 w-full rounded bg-gray-100" />
                  <div className="h-4 w-2/3 rounded bg-gray-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline skeleton */}
      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-24">
            <div className="lg:col-span-5 space-y-4">
              <div className="h-6 w-32 rounded-full bg-gray-200" />
              <div className="h-8 w-full rounded bg-gray-200" />
              <div className="h-4 w-full rounded bg-gray-100" />
              <div className="h-4 w-3/4 rounded bg-gray-100" />
            </div>
            <div className="lg:col-span-6 lg:col-start-7 space-y-8 border-l border-gray-200 pl-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="space-y-2">
                  <div className="h-4 w-20 rounded bg-gray-200" />
                  <div className="h-5 w-48 rounded bg-gray-200" />
                  <div className="h-4 w-full rounded bg-gray-100" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
