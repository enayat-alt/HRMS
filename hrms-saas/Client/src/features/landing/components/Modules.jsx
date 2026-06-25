import { modules } from '../data/landingData';
import { Building2, BriefcaseBusiness, CreditCard, Sparkles, SearchCheck } from 'lucide-react';

const iconMap = {
  Building2,
  SearchCheck,
  CreditCard,
  Sparkles,
  BriefcaseBusiness,
};

export default function Modules() {
  return (
    <section id="modules" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">HR Modules</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for every stage of the employee lifecycle.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {modules.map((module) => {
            const Icon = iconMap[module.icon] ?? Building2;
            return (
              <article key={module.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-slate-900">{module.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{module.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
