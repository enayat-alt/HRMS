import { benefits } from '../data/landingData';
import { ArrowRight, BadgeCheck, ShieldCheck } from 'lucide-react';

export default function Benefits() {
  return (
    <section className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Why choose us</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Built for reliability, clarity, and growth.
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Give your HR team the confidence to operate at scale without compromising employee experience.
          </p>
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">99.9% uptime</p>
                <p className="text-sm text-slate-600">Mission-critical reliability for every workflow.</p>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <BadgeCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-slate-900">100+ companies trust the platform</p>
                <p className="text-sm text-slate-600">Forward-looking teams rely on our product every day.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <article key={benefit.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-100 text-slate-700">
                <ArrowRight className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{benefit.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
