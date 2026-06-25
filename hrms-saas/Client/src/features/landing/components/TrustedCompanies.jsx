import { trustedCompanies } from '../data/landingData';

export default function TrustedCompanies() {
  return (
    <section className="border-y border-slate-200 bg-white px-6 py-10 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
          Trusted by growing businesses worldwide
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {trustedCompanies.map((company) => (
            <div key={company} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-5 text-center text-sm font-semibold text-slate-600 shadow-sm">
              {company}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
