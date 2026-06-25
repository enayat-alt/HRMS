import { Outlet } from 'react-router-dom';

export default function TenantLayout() {
  return (
    <div className='min-h-screen bg-slate-100'>
      <header className='border-b bg-white p-4'>Tenant Workspace</header>
      <main className='p-6'>
        <Outlet />
      </main>
    </div>
  );
}
