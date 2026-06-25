import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { footerColumns } from '../data/landingData';

const socials = [
  { label: 'LinkedIn', icon: Linkedin },
  { label: 'Twitter', icon: Twitter },
  { label: 'Instagram', icon: Instagram },
  { label: 'Facebook', icon: Facebook },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-14 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3 text-slate-900">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">HR</div>
              <span className="text-lg font-semibold tracking-tight">Northstar HRMS</span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Premium workforce software for modern companies that want a thoughtful, scalable HR experience.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.label} href="#" aria-label={social.label} className="rounded-full border border-slate-200 p-2.5 text-slate-600 transition hover:border-blue-200 hover:text-blue-600">
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">{column.title}</h3>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-slate-600 transition hover:text-blue-600">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © 2026 Northstar HRMS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
