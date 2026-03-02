export default function AboutAutismLoading() {
  return (
    <main className="w-full bg-white animate-pulse">
      <section className="border-b border-border-light bg-white">
        <div className="container-max py-12 md:py-14 lg:py-16">
          <div className="max-w-4xl space-y-5">
            <div className="h-6 w-56 rounded-full bg-gray-200" />
            <div className="h-12 w-full rounded-lg bg-gray-200" />
            <div className="h-12 w-4/5 rounded-lg bg-gray-200" />
            <div className="h-5 w-full rounded bg-gray-100" />
            <div className="h-5 w-3/4 rounded bg-gray-100" />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-2xl border border-border-light bg-white p-6">
                <div className="h-12 w-12 rounded-xl bg-gray-100 mb-4" />
                <div className="h-6 w-2/3 rounded bg-gray-200 mb-3" />
                <div className="h-4 w-full rounded bg-gray-100 mb-2" />
                <div className="h-4 w-5/6 rounded bg-gray-100" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
