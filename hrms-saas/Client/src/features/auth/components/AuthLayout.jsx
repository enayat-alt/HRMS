import { ArrowRight, Sparkles ,ShieldCheck  } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children, title, subtitle }) {
  return (
    <section className='min-h-screen bg-slate-950 px-4 py-6 text-slate-900 sm:px-6 lg:px-8'>
      <div className='mx-auto flex min-h-screen max-w-7xl flex-col justify-center'>
        <div className='overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_24px_80px_-24px_rgba(15,23,42,0.35)] lg:grid lg:grid-cols-[1.02fr_0.98fr]'>
          <div className='relative hidden flex-col justify-between bg-slate-950 p-10 text-white lg:flex'>
            <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.14),_transparent_35%)]' />
            <div className='relative'>
              <div className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-sm font-medium text-slate-100'>
                <Sparkles className='h-4 w-4' />
                Enterprise HR Platform
              </div>
              <h1 className='mt-8 max-w-xl text-4xl font-semibold tracking-tight'>Secure, modern access for every team member.</h1>
              <p className='mt-4 max-w-lg text-sm leading-7 text-slate-300'>Streamline onboarding, approvals, people operations, and compliance from one trusted workspace.</p>
            </div>

            <div className='relative rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-slate-100'>Trusted by growing teams</p>
                  <p className='mt-1 text-xs text-slate-400'>Multi-tenant, role-aware, and ready for scale.</p>
                </div>
                <div className='rounded-full bg-emerald-400/15 p-3 text-emerald-300'>
                  <ShieldCheck className='h-5 w-5' />
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center bg-slate-50 p-6 sm:p-8 lg:p-12'>
            <div className='w-full max-w-md'>
              <Link to='/' className='mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-slate-900'>
                <ArrowRight className='h-4 w-4 rotate-180' />
                Back to overview
              </Link>
              <div className='mb-8'>
                <h2 className='text-3xl font-semibold tracking-tight text-slate-950'>{title}</h2>
                {subtitle ? <p className='mt-2 text-sm leading-6 text-slate-600'>{subtitle}</p> : null}
              </div>
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
