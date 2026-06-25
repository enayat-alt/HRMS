export default function Checkbox({ id, label, checked, onChange, required = false }) {
  return (
    <label htmlFor={id} className='flex items-start gap-3 text-sm text-slate-600'>
      <input
        id={id}
        name={id}
        type='checkbox'
        checked={checked}
        onChange={onChange}
        required={required}
        className='mt-0.5 h-4 w-4 rounded border-slate-300 text-slate-900 focus:ring-slate-500'
      />
      <span>{label}</span>
    </label>
  );
}
