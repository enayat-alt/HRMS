import { ArrowRight, PlayCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { stats } from '../data/landingData';

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-slate-50 px-6 py-20 lg:px-8 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.12),_transparent_45%)]" />
      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white px-3 py-1 text-sm font-medium text-blue-700 shadow-sm">
            <ShieldCheck className="h-4 w-4" />
            Enterprise-grade HR operations, beautifully simplified
          </div>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Modern HRMS for the way modern teams work.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Unite payroll, attendance, recruitment, and performance in one premium workspace designed for fast-moving organizations.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
              Start Free Trial <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700">
              <PlayCircle className="h-4 w-4" /> Book Demo
            </a>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -translate-y-4 rounded-[2rem] bg-gradient-to-br from-blue-100 via-white to-slate-100 blur-3xl" />
          <div className="relative rounded-[2rem] border border-slate-200 bg-white p-4 shadow-[0_20px_80px_rgba(15,23,42,0.08)]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-950 p-5 text-white">
              <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
                <div>
                  <p className="text-sm text-slate-300">People Operations</p>
                  <p className="text-lg font-semibold">HQ Workspace</p>
                </div>
                <div className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-medium text-emerald-300">Live</div>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-[1fr_0.8fr]">
                <div className="rounded-2xl bg-slate-900 p-4">
                  <div className="flex items-center gap-2 text-sm text-slate-300">
                    <Sparkles className="h-4 w-4 text-blue-400" />
                    Weekly Analytics
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-4/5 rounded-full bg-blue-500" />
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-3/4 rounded-full bg-emerald-500" />
                    </div>
                    <div className="h-2 rounded-full bg-slate-800">
                      <div className="h-2 w-2/3 rounded-full bg-violet-500" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4 rounded-2xl bg-slate-900 p-4">
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Attendance</p>
                    <p className="mt-2 text-3xl font-semibold">96%</p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-4">
                    <p className="text-sm text-slate-300">Leave Requests</p>
                    <p className="mt-2 text-3xl font-semibold">42</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
