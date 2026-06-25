import { Navigate, Route, Routes } from 'react-router-dom';
import AuthLayout from '../layouts/AuthLayout';
import EmployeeLayout from '../layouts/EmployeeLayout';
import SuperAdminLayout from '../layouts/SuperAdminLayout';
import TenantLayout from '../layouts/TenantLayout';
import ProtectedRoute from './ProtectedRoute';
import SuperAdminRoute from './SuperAdminRoute';
import TenantRoute from './TenantRoute';
import EmployeeRoute from './EmployeeRoute';
import LoginPage from '../features/auth/pages/LoginPage';
import RegisterPage from '../features/auth/pages/RegisterPage';
import SuperAdminDashboardPage from '../features/super-admin/dashboard/pages/DashboardPage';
import TenantDashboardPage from '../features/tenant/dashboard/pages/DashboardPage';
import EmployeeDashboardPage from '../features/employee/dashboard/pages/DashboardPage';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<SuperAdminRoute />}>
          <Route element={<SuperAdminLayout />}>
            <Route path='/super-admin' element={<SuperAdminDashboardPage />} />
          </Route>
        </Route>

        <Route element={<TenantRoute />}>
          <Route element={<TenantLayout />}>
            <Route path='/tenant' element={<TenantDashboardPage />} />
          </Route>
        </Route>

        <Route element={<EmployeeRoute />}>
          <Route element={<EmployeeLayout />}>
            <Route path='/employee' element={<EmployeeDashboardPage />} />
          </Route>
        </Route>
      </Route>

      <Route path='*' element={<Navigate to='/login' replace />} />
    </Routes>
  );
}
