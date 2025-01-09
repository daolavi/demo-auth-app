import {ReactNode} from "react";
import {useAuth0} from "@auth0/auth0-react";

interface RouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children } : RouteProps) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()

  if (isLoading) return <div>Loading...</div>

  if (!isAuthenticated) {
    loginWithRedirect()
    return null
  }

  return <>{children}</>
};