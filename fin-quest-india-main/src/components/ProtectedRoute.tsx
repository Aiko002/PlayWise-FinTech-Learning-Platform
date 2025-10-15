import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

export default function ProtectedRoute() {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    const redirectTo = encodeURIComponent(location.pathname + location.search);
    return <Navigate to={`/auth?mode=login&redirectTo=${redirectTo}`} replace />;
  }

  return <Outlet />;
}
