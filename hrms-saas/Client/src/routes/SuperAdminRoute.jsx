import SuperAdminLayout from "../layouts/SuperAdminLayout";
import ProtectedRoute from "./ProtectedRoute";

import SuperAdminDashboardPage from "../features/super-admin/dashboard/pages/DashboardPage";

export const superAdminRoutes = [
  {
    element: <ProtectedRoute allowedRoles={["super-admin"]} />,
    children: [
      {
        element: <SuperAdminLayout />,
        children: [
          {
            path: "/super-admin",
            element: <SuperAdminDashboardPage />,
          },
        ],
      },
    ],
  },
];