import { Activity, ArrowUpRight, CalendarDays, CreditCard, Users } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-950 p-6 shadow-[0_20px_80px_rgba(15,23,42,0.14)] sm:p-8 lg:p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">Dashboard Preview</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              A calm, executive-ready view of your workforce.
            </h2>
            <p className="mt-4 text-lg text-slate-400">
              Real-time insights, smart approvals, and polished workflows that keep leaders ahead of the curve.
            </p>
          </div>
          <a href="/register" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400">
            Explore workspace <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <div className="flex items-center gap-3 text-slate-200">
                <Users className="h-5 w-5 text-blue-400" />
                <span className="text-sm font-medium">Employees</span>
              </div>
              <p className="mt-4 text-4xl font-semibold text-white">3,642</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <div className="flex items-center gap-3 text-slate-200">
                  <CalendarDays className="h-5 w-5 text-emerald-400" />
                  <span className="text-sm font-medium">Attendance</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">96.4%</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
                <div className="flex items-center gap-3 text-slate-200">
                  <CreditCard className="h-5 w-5 text-violet-400" />
                  <span className="text-sm font-medium">Payroll</span>
                </div>
                <p className="mt-4 text-3xl font-semibold text-white">On track</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900 p-5">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3">
              <div>
                <p className="text-sm text-slate-300">Operations Center</p>
                <p className="font-semibold text-white">Monthly performance</p>
              </div>
              <div className="rounded-full bg-blue-500/20 px-3 py-1 text-sm font-medium text-blue-300">+18.2%</div>
            </div>
            <div className="mt-5 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-slate-800 p-5">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Activity className="h-4 w-4 text-emerald-400" />
                  Activity Overview
                </div>
                <div className="mt-6 flex items-end gap-2">
                  {[46, 58, 62, 71, 82, 90].map((height) => (
                    <div key={height} className="flex-1 rounded-t-full bg-gradient-to-t from-blue-600 to-cyan-400" style={{ height: `${height}px` }} />
                  ))}
                </div>
              </div>
              <div className="rounded-3xl border border-white/10 bg-slate-800 p-5">
                <p className="text-sm text-slate-300">Recent activity</p>
                <ul className="mt-4 space-y-3 text-sm text-slate-200">
                  <li className="rounded-xl bg-white/10 px-3 py-2">New leave request · 4 min ago</li>
                  <li className="rounded-xl bg-white/10 px-3 py-2">Payroll approved · 27 min ago</li>
                  <li className="rounded-xl bg-white/10 px-3 py-2">Recruitment pipeline updated</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
