import { Star } from 'lucide-react';
import { testimonials } from '../data/landingData';

export default function Testimonials() {
  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">Testimonials</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Trusted by people leaders who value clarity.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.name} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-1 text-amber-500">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-5 text-base leading-8 text-slate-700">“{testimonial.quote}”</p>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-sm font-semibold text-blue-700">
                  {testimonial.name.split(' ').map((part) => part[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-600">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
