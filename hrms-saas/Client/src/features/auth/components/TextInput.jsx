export default function TextInput({ id, label, type = 'text', value, onChange, placeholder, error, icon: Icon, autoComplete, required = false, className = '' }) {
  return (
    <div className='space-y-2'>
      {label ? (
        <label htmlFor={id} className='block text-sm font-medium text-slate-700'>
          {label}
          {required ? <span className='ml-1 text-rose-500'>*</span> : null}
        </label>
      ) : null}
      <div className={`flex items-center rounded-2xl border bg-white px-3 py-3 shadow-sm transition focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-200 ${error ? 'border-rose-300' : 'border-slate-200'} ${className}`}>
        {Icon ? <Icon className='mr-3 h-4 w-4 text-slate-400' /> : null}
        <input
          id={id}
          name={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className='w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400'
        />
      </div>
      {error ? <p className='text-sm text-rose-600'>{error}</p> : null}
    </div>
  );
}
