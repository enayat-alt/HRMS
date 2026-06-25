import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section id="contact" className="px-6 pb-20 lg:px-8 lg:pb-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-slate-200 bg-slate-900 px-8 py-16 text-center text-white shadow-[0_20px_80px_rgba(15,23,42,0.12)] sm:px-12 lg:px-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">Ready to simplify HR?</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl">
          Give your people team a sharper, more premium operating system.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
          Launch faster, stay compliant, and create a better experience for every employee from day one.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a href="/register" className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Get Started <ArrowRight className="h-4 w-4" />
          </a>
          <a href="/login" className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            Book Demo
          </a>
        </div>
      </div>
    </section>
  );
}
