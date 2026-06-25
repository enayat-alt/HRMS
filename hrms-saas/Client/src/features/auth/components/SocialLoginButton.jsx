export default function SocialLoginButton({ children, icon: Icon, onClick }) {
  return (
    <button
      type='button'
      onClick={onClick}
      className='inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400'
    >
      {Icon ? <Icon className='h-4 w-4' /> : null}
      {children}
    </button>
  );
}
