import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./authenticationProvider.tsx";
import { jwtDecode, JwtPayload } from "jwt-decode";

export type ProtectedRouteProps = {
  allowedGroups: string[]
}

export type CustomJWTPayload = JwtPayload & {
  groups: string[]
}

export const ProtectedRoute = ({
    allowedGroups
  }: ProtectedRouteProps) => {
  // Only for UX, not for security due to this being an SPA
  const { token } = useAuth();

  // Check the user is authenticated
  if (!token) {
    return <Navigate to="/login" />;
  }

  // check the user is authorized
  const decoded = jwtDecode<CustomJWTPayload>(token)

  if (allowedGroups.filter(allowedGroup => decoded['groups'].includes(allowedGroup)).length === 0) {
    return <Navigate to="/403" />;
  }

  return <Outlet />;
};
