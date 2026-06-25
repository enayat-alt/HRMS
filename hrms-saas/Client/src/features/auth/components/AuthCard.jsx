export default function AuthCard({ children, className = '' }) {
  return (
    <div className={`rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
