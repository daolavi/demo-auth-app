import {useAuth0} from "@auth0/auth0-react";
import './Navbar.css';

export const Navbar = () => {
  const {isAuthenticated, loginWithRedirect, logout, user} = useAuth0()

  return (
    <div className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <span className="brand">Auth Demo App</span>
        </div>
        <div className="navbar-right">
          {isAuthenticated ? (
            <>
              <span className="username">Welcome, {user?.name}</span>
              <button
                className="logout-button"
                onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}
              >
                Log Out
              </button>
            </>
          ) : (
            <button className="login-button" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          )}
        </div>
      </div>
    </div>
  )
}