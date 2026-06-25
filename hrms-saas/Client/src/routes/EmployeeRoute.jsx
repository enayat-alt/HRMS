import EmployeeLayout from "../layouts/EmployeeLayout";
import ProtectedRoute from "./ProtectedRoute";

import EmployeeDashboardPage from "../features/employee/dashboard/pages/DashboardPage";

export const employeeRoutes = [
  {
    element: <ProtectedRoute allowedRoles={["employee"]} />,
    children: [
      {
        element: <EmployeeLayout />,
        children: [
          {
            path: "/employee",
            element: <EmployeeDashboardPage />,
          },
        ],
      },
    ],
  },
];