import { ArrowUpRight } from 'lucide-react';
import { features } from '../data/landingData';
import { Building2, CalendarDays, Clock3, BriefcaseBusiness, TrendingUp, Wallet } from 'lucide-react';

const iconMap = {
  Users: Building2,
  Clock3,
  CalendarDays,
  Wallet,
  BriefcaseBusiness,
  TrendingUp,
};

export default function Features() {
  return (
    <section id="features" className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Features</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Everything your people team needs to move faster.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Designed to simplify complexity without sacrificing control, scale, or employee experience.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Building2;
            return (
              <article key={feature.title} className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-slate-900">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{feature.description}</p>
                <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-600">
                  Explore <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
