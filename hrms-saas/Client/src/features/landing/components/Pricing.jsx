import { pricingPlans } from '../data/landingData';

export default function Pricing() {
  return (
    <section id="pricing" className="bg-slate-50 px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Pricing</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Choose the plan that fits your growth stage.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <article key={plan.name} className={`rounded-[2rem] border p-8 shadow-sm ${plan.featured ? 'border-blue-200 bg-blue-600 text-white shadow-lg' : 'border-slate-200 bg-white text-slate-900'}`}>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                {plan.featured && <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">Popular</span>}
              </div>
              <p className={`mt-4 text-sm leading-7 ${plan.featured ? 'text-blue-50' : 'text-slate-600'}`}>{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                <span className="text-4xl font-semibold">{plan.price}</span>
                {plan.price !== 'Custom' && <span className={`pb-1 text-sm ${plan.featured ? 'text-blue-50' : 'text-slate-500'}`}>/ month</span>}
              </div>
              <ul className="mt-8 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm ${plan.featured ? 'text-blue-50' : 'text-slate-700'}`}>
                    <span className={`h-2.5 w-2.5 rounded-full ${plan.featured ? 'bg-white' : 'bg-blue-600'}`} />
                    {feature}
                  </li>
                ))}
              </ul>
              <a href="/register" className={`mt-8 inline-flex rounded-full px-5 py-3 text-sm font-semibold transition ${plan.featured ? 'bg-white text-blue-600 hover:bg-slate-100' : 'bg-slate-900 text-white hover:bg-slate-700'}`}>
                Get Started
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
