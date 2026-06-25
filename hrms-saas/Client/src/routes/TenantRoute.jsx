import TenantLayout from "../layouts/TenantLayout";
import ProtectedRoute from "./ProtectedRoute";

import TenantDashboardPage from "../features/tenant/dashboard/pages/DashboardPage";

export const tenantRoutes = [
  {
    element: <ProtectedRoute allowedRoles={["tenant"]} />,
    children: [
      {
        element: <TenantLayout />,
        children: [
          {
            path: "/tenant",
            element: <TenantDashboardPage />,
          },
        ],
      },
    ],
  },
];