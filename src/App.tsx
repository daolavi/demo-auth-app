import './App.css'
import {useAuth0} from "@auth0/auth0-react";

function App() {
  const {loginWithRedirect, logout, isLoading, isAuthenticated, user} = useAuth0()

  if (isLoading){
    return <div>Loading...</div>
  }

  return (
    <div>
      <h1>Auth0 React Authentication</h1>
      {isAuthenticated ? (
        <>
          <h2>Welcome, {user?.name}!</h2>
          <p>Email: {user?.email}</p>
          <button
            onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
          >
            Log Out
          </button>
        </>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  )
}

export default App
