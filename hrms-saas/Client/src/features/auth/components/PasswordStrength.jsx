export default function PasswordStrength({ password }) {
  const score = password.length >= 12 ? 4 : password.length >= 8 ? 3 : password.length >= 6 ? 2 : password.length > 0 ? 1 : 0;

  const labels = ['Very weak', 'Weak', 'Fair', 'Good', 'Strong'];
  const colors = ['bg-rose-500', 'bg-amber-500', 'bg-sky-500', 'bg-emerald-500', 'bg-emerald-600'];

  return (
    <div className='space-y-2'>
      <div className='flex items-center justify-between text-xs font-medium text-slate-500'>
        <span>Password strength</span>
        <span>{labels[score]}</span>
      </div>
      <div className='flex gap-1'>
        {[0, 1, 2, 3].map((item) => (
          <div key={item} className={`h-1.5 flex-1 rounded-full ${item < score ? colors[score] : 'bg-slate-200'}`} />
        ))}
      </div>
    </div>
  );
}
