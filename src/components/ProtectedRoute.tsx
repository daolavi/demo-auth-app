import {ReactNode} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {useLocation} from "react-router-dom";

interface RouteProps {
  children: ReactNode;
}

export const ProtectedRoute = ({ children } : RouteProps) => {
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0()
  const location = useLocation()

  if (isLoading) return <div>Loading...</div>

  if (!isAuthenticated) {
    loginWithRedirect({
      appState: { returnTo: location.pathname }
    })
    return null
  }

  return <>{children}</>
};