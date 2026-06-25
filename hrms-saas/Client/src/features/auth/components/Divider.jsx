export default function Divider({ label }) {
  return (
    <div className='flex items-center gap-3 py-2'>
      <div className='h-px flex-1 bg-slate-200' />
      {label ? <span className='text-xs font-medium uppercase tracking-[0.2em] text-slate-400'>{label}</span> : null}
      <div className='h-px flex-1 bg-slate-200' />
    </div>
  );
}
