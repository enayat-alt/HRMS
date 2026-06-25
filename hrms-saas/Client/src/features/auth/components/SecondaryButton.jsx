export default function SecondaryButton({ children, type = 'button', className = '', ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex w-full items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
