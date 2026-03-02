export default function Loading() {
  return (
    <main className="min-h-screen">
      {/* Hero Skeleton */}
      <section className="relative bg-hero pt-32 pb-20 overflow-hidden">
        <div className="container-max">
          <div className="text-center max-w-3xl mx-auto">
            <div className="h-8 w-32 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
            <div className="h-16 w-3/4 bg-gray-200 rounded-lg mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 w-full bg-gray-200 rounded mx-auto mb-2 animate-pulse"></div>
            <div className="h-6 w-2/3 bg-gray-200 rounded mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Cards Skeleton */}
      <section className="py-12 -mt-16 relative z-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="card bg-white h-64 animate-pulse">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full mb-4"></div>
                  <div className="h-6 w-32 bg-gray-200 rounded mb-2"></div>
                  <div className="h-5 w-48 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 w-24 bg-gray-200 rounded mt-2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="section bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div className="space-y-6">
              <div className="h-10 w-64 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
              <div className="h-32 w-full bg-gray-200 rounded animate-pulse"></div>
            </div>
            <div className="h-[400px] bg-gray-200 rounded-2xl animate-pulse"></div>
          </div>
        </div>
      </section>
    </main>
  );
}
