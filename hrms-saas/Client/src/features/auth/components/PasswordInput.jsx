import { Eye, EyeOff, Lock } from 'lucide-react';

export default function PasswordInput({ id, label, value, onChange, placeholder, error, showPassword, onToggleVisibility, required = false, autoComplete }) {
  return (
    <div className='space-y-2'>
      {label ? (
        <label htmlFor={id} className='block text-sm font-medium text-slate-700'>
          {label}
          {required ? <span className='ml-1 text-rose-500'>*</span> : null}
        </label>
      ) : null}
      <div className={`flex items-center rounded-2xl border bg-white px-3 py-3 shadow-sm transition focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-200 ${error ? 'border-rose-300' : 'border-slate-200'}`}>
        <Lock className='mr-3 h-4 w-4 text-slate-400' />
        <input
          id={id}
          name={id}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
          required={required}
          className='w-full border-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400'
        />
        <button
          type='button'
          onClick={onToggleVisibility}
          className='ml-2 rounded-full p-1 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400'
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? <EyeOff className='h-4 w-4' /> : <Eye className='h-4 w-4' />}
        </button>
      </div>
      {error ? <p className='text-sm text-rose-600'>{error}</p> : null}
    </div>
  );
}
