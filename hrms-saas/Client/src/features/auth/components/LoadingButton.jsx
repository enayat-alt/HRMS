import { LoaderCircle } from 'lucide-react';

export default function LoadingButton({ loading = false, children, className = '', ...props }) {
  return (
    <button
      type='button'
      disabled={loading}
      className={`inline-flex w-full items-center justify-center rounded-2xl bg-slate-900 px-4 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:cursor-not-allowed disabled:opacity-70 ${className}`}
      {...props}
    >
      {loading ? <LoaderCircle className='mr-2 h-4 w-4 animate-spin' /> : null}
      {children}
    </button>
  );
}
