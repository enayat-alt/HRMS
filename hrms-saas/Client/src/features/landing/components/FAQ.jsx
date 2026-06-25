import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqs } from '../data/landingData';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="px-6 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-5xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">FAQ</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
            Questions about adopting our HRMS platform.
          </h2>
        </div>
        <div className="mt-10 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
                <button type="button" className="flex w-full items-center justify-between px-6 py-5 text-left" aria-expanded={isOpen} onClick={() => setOpenIndex(isOpen ? -1 : index)}>
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <ChevronDown className={`h-5 w-5 text-slate-500 transition ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="px-6 pb-6 text-sm leading-7 text-slate-600">{faq.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
