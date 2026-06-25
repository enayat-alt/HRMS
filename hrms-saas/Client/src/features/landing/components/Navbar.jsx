import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navItems } from '../data/landingData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 shadow-sm backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Primary">
        <a href="#top" className="flex items-center gap-3 text-slate-900">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-sm font-semibold text-white">HR</div>
          <span className="text-lg font-semibold tracking-tight">HRMS</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600 transition hover:text-blue-600">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100">
            Login
          </a>
          <a href="/register" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700">
            Get Started
          </a>
        </div>

        <button type="button" className="rounded-full p-2 text-slate-700 md:hidden" aria-label="Toggle menu" onClick={() => setMobileOpen((open) => !open)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white/95 px-6 py-4 shadow-sm md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} className="text-sm font-medium text-slate-600" onClick={() => setMobileOpen(false)}>
                {item.label}
              </a>
            ))}
            <a href="/login" className="rounded-full px-4 py-2 text-sm font-medium text-slate-700" onClick={() => setMobileOpen(false)}>
              Login
            </a>
            <a href="/register" className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white text-center" onClick={() => setMobileOpen(false)}>
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
